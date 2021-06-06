using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Online_Booking_Tourism.Models;

namespace Online_Booking_Tourism.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TravelersController : ControllerBase
    {
        private readonly OTDBContext _context;
        private readonly IWebHostEnvironment _hostEnvironment;

        public TravelersController(OTDBContext context, IWebHostEnvironment hostEnvironment)
        {
            _context = context;
            this._hostEnvironment = hostEnvironment;
        }

        // GET: api/Travelers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Traveler>>> GetTravelers()
        {
            return await _context.Travelers
                 .Select(x => new Traveler()
                 {
                     TravelerId = x.TravelerId,
                     TravellerName = x.TravellerName,
                     Place = x.Place,
                     TelephoneNumber = x.TelephoneNumber,
                     TravellingDate = x.TravellingDate,
                     ImageName = x.ImageName,
                     ImageSrc = string.Format("{0}://{1}{2}/TravelerImages/{3}", Request.Scheme, Request.Host, Request.PathBase, x.ImageName)
                 })
                .ToListAsync();
        }

        // GET: api/Travelers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Traveler>> GetTraveler(int id)
        {
            var traveler = await _context.Travelers.FindAsync(id);

            if (traveler == null)
            {
                return NotFound();
            }

            return traveler;
        }

        // PUT: api/Travelers/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTraveler(int id, [FromForm] Traveler traveler)
        {
            if (id != traveler.TravelerId)
            {
                return BadRequest();
            }
            if (traveler.ImageFile != null)
            {
                DeleteImage(traveler.ImageName);
                traveler.ImageName = await SaveImage(traveler.ImageFile);
            }


            _context.Entry(traveler).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TravelerExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Travelers
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Traveler>> PostTraveler([FromForm] Traveler traveler)
        {
            traveler.ImageName = await SaveImage(traveler.ImageFile);
            _context.Travelers.Add(traveler);
            await _context.SaveChangesAsync();

            return StatusCode(201);
        }

        // DELETE: api/Travelers/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Traveler>> DeleteTraveler(int id)
        {
            var traveler = await _context.Travelers.FindAsync(id);
            if (traveler == null)
            {
                return NotFound();
            }
            DeleteImage(traveler.ImageName);

            _context.Travelers.Remove(traveler);
            await _context.SaveChangesAsync();

            return traveler;
        }

        private bool TravelerExists(int id)
        {
            return _context.Travelers.Any(e => e.TravelerId == id);
        }

        [NonAction]
        public async Task<string> SaveImage(IFormFile imageFile)
        {
            string imageName = new string(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ', '-');
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "TravelerImages", imageName);
            using (var filestream = new FileStream(imagePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(filestream);
            }
            return imageName;
        }

        [NonAction]
        public void DeleteImage(string imageName)
        {
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "TravelerImages", imageName);
            if (System.IO.File.Exists(imagePath))
                System.IO.File.Delete(imagePath);

        }



    }
}
