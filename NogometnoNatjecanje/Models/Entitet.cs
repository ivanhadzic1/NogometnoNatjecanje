using System.ComponentModel.DataAnnotations;

namespace NogometnoNatjecanje.Models
{
    public abstract class Entitet
    {
        [Key]
        public int Sifra { get; set; }
    }
}