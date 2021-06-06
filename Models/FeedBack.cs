using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Online_Booking_Tourism.Models
{
    public class FeedBack
    {
        [Key]
        public int UserId { get; set; }
       
        [EmailAddress]
        public string Email { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Feedback { get; set; }
        [NotMapped]
        public IFormFile FeedbackFile { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string FeedbackName { get; set; }

    }
}
