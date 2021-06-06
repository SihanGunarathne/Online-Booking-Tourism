using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Http;

namespace Online_Booking_Tourism.Models
{
    public class Guider
    {
        [Key]
        public int GuiderId { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string GuiderName { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Place { get; set; }
        [Column(TypeName = "nvarchar(10)")]
        public string TelephoneNumber { get; set; }
        [Column(TypeName = "nvarchar(20)")]
        public int Price { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string ImageName { get; set; }
        [NotMapped]
        public IFormFile ImageFile { get; set; }
        [NotMapped]
        public string ImageSrc { get; set; }

    }
}
