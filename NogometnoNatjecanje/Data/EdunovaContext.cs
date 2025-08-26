using Microsoft.EntityFrameworkCore;
using NogometnoNatjecanje.Models;

namespace NogometnoNatjecanje.Data
{
    public class EdunovaContext : DbContext
    {
        public EdunovaContext(DbContextOptions<EdunovaContext> options) : base(options)
        {

        }
        public DbSet<Natjecanje> Natjecanja { get; set; }
    }
}