using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Online_Booking_Tourism.Models.jwt;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Online_Booking_Tourism.Models
{
    public class OTDBContext : DbContext
    {
        public OTDBContext(DbContextOptions options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration(new RoleConfiguration());
            modelBuilder.Entity<IdentityUserRole<string>>().HasKey(p => new { p.UserId, p.RoleId });
        }
        public DbSet<User> Users { get; set; }

        public DbSet<Hotel> Hotels { get; set; }
        public DbSet<Traveler> Travelers { get; set; }
        public DbSet<Guider> Guiders { get; set; }
        public DbSet<Admin> Admins { get; set; }
        public DbSet<FeedBack> FeedBacks { get; set; }
    }
}