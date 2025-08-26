using Microsoft.AspNetCore.Mvc;
using NogometnoNatjecanje.Data;
using NogometnoNatjecanje.Models;

namespace NogometnoNatjecanje.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class NatjecanjeController : ControllerBase
    {
        private readonly EdunovaContext _context;
        public NatjecanjeController(EdunovaContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_context.Natjecanja);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpGet("{sifra:int}")]
        public IActionResult Get(int sifra)
        {
            if (sifra < 1)
            {
                return BadRequest("Ne valja šifra");
            }
            try
            {
                var natjecanje = _context.Natjecanja.Find(sifra);
                if (natjecanje == null)
                {
                    return NotFound();
                }
                return Ok(natjecanje);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpPost]
        public IActionResult Post(Natjecanje natjecanje)
        {
            try
            {
                _context.Natjecanja.Add(natjecanje);
                _context.SaveChanges();
                return StatusCode(StatusCodes.Status201Created, natjecanje);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpPut("{sifra:int}")]
        public IActionResult Put(int sifra, Natjecanje natjecanje)
        {
            if (sifra < 1)
            {
                return BadRequest(new { poruka = "Šifra mora biti veća od 0" });
            }
            try
            {
                Natjecanje n = _context.Natjecanja.Find(sifra);

                if (n == null)
                {
                    return NotFound();
                }

                n.Naziv = natjecanje.Naziv;
                n.Mjesto = natjecanje.Mjesto;

                _context.Natjecanja.Update(n);
                _context.SaveChanges();
                return Ok(n);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpDelete("{sifra:int}")]
        public IActionResult Delete(int sifra)
        {
            if (sifra < 1)
            {
                return BadRequest(new { poruka = "Šifra mora biti veća od 0" });
            }
            try
            {
                Natjecanje n = _context.Natjecanja.Find(sifra);
                if (n == null)
                {
                    return NotFound();
                }
                _context.Natjecanja.Remove(n);
                _context.SaveChanges();
                return NoContent();
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

    }
}
