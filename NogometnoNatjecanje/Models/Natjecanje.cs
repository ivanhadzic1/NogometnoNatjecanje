using System.ComponentModel.DataAnnotations.Schema;

namespace NogometnoNatjecanje.Models
{
    [Table("natjecanje")]
    public class Natjecanje : Entitet
    {
        public string Naziv { get; set; } = "";
        public string Mjesto { get; set; } = "";
    }
}