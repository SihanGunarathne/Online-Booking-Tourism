using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Online_Booking_Tourism.Models
{
    public class Hotel
    {
        [Required]
        [Key]
        public int HotelId { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string HotelName { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Place { get; set; }
        public bool AcNoneac { get; set; }
        [Column(TypeName = "nvarchar(10)")]
        public int Price { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string ImageName { get; set; }
        [NotMapped]
        public IFormFile ImageFile { get; set; }
        [NotMapped]
        public string ImageSrc { get; set; }
    }
}
