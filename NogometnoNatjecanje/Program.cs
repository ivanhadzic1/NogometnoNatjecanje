using NogometnoNatjecanje.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();
builder.Services.AddOpenApi();

builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<EdunovaContext>(o =>
{
    o.UseSqlServer(builder.Configuration.GetConnectionString("EdunovaContext"));
});


builder.Services.AddCors(o =>
{
    o.AddPolicy("CorsPolicy", p =>
    {
        p.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
});



var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseSwagger();
app.UseSwaggerUI(options =>
{
    options.EnableTryItOutByDefault();
});


app.MapControllers();


app.UseStaticFiles();
app.UseDefaultFiles();
app.MapFallbackToFile("index.html");


app.UseCors("CorsPolicy");

app.Run();