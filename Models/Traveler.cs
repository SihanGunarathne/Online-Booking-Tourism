using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Online_Booking_Tourism.Models
{
    public class Traveler
    {
        [Key]
        public int TravelerId { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string TravellerName { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string Place { get; set; }
        [Column(TypeName = "nvarchar(10)")]
        public string TelephoneNumber { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string TravellingDate { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string ImageName { get; set; }

        [NotMapped]
        public IFormFile ImageFile { get; set; }
        [NotMapped]
        public string ImageSrc { get; set; }
    }
}
