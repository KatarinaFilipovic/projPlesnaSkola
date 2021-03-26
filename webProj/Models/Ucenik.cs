using System.Text.Json.Serialization;
using System.ComponentModel.DataAnnotations;

namespace webProj.Models
{
    public class Ucenik 
    {
        public int ID {get;set;}
        
        [MaxLength(255)]
        public string Ime {get;set;}
        
        [MaxLength(255)]
        public string Prezime {get;set;}
        public string Email {get;set;}

        [JsonIgnore]
        //[Column("plesId")]
        public Ples PLes {get;set;}


    }
}