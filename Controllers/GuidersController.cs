using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Online_Booking_Tourism.Models;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Authorization;

namespace Online_Booking_Tourism.Controllers
{
    //[Authorize(Roles ="Visitor")]
    [Route("api/[controller]")]
    [ApiController]
    public class GuidersController : ControllerBase
    {
        private readonly OTDBContext _context;
        private readonly IWebHostEnvironment _hostEnvironment;

        public GuidersController(OTDBContext context,IWebHostEnvironment hostEnvironment)
        {
            _context = context;
            this._hostEnvironment = hostEnvironment;
        }

        // GET: api/Guiders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Guider>>> GetGuiders()
        {
            return await _context.Guiders
                .Select(x => new Guider()
                {
                    GuiderId = x.GuiderId,
                    GuiderName = x.GuiderName,
                    Place = x.Place,
                    TelephoneNumber = x.TelephoneNumber,
                    Price = x.Price,
                    ImageName = x.ImageName,
                    ImageSrc = string.Format("{0}://{1}{2}/Images/{3}", Request.Scheme, Request.Host, Request.PathBase, x.ImageName)
                })
                .ToListAsync();
        }

        // GET: api/Guiders/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Guider>> GetGuider(int id)
        {
            var guider = await _context.Guiders.FindAsync(id);

            if (guider == null)
            {
                return NotFound();
            }

            return guider;
        }

       // [Authorize(Roles = "Visitor")]
        // PUT: api/Guiders/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGuider(int id, [FromForm] Guider guider)
        {
            if (id != guider.GuiderId)
            {
                return BadRequest();
            }
            if(guider.ImageFile !=null)
            {
                DeleteImage(guider.ImageName);
                guider.ImageName = await SaveImage(guider.ImageFile);
            }

            _context.Entry(guider).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GuiderExists(id))
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

       // [Authorize(Roles = "Visitor")]
        // POST: api/Guiders
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Guider>> PostGuider([FromForm]Guider guider)
        {
           guider.ImageName = await SaveImage(guider.ImageFile);


            _context.Guiders.Add(guider);
            await _context.SaveChangesAsync();

            return StatusCode(201);
        }
         
        // DELETE: api/Guiders/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Guider>> DeleteGuider(int id)
        {
            var guider = await _context.Guiders.FindAsync(id);
            if (guider == null)
            {
                return NotFound();
            }
            DeleteImage(guider.ImageName);

            _context.Guiders.Remove(guider);
            await _context.SaveChangesAsync();

            return guider;
        }

        private bool GuiderExists(int id)
        {
            return _context.Guiders.Any(e => e.GuiderId == id);
        }
        [NonAction]
        public async Task <string> SaveImage(IFormFile imageFile)
        {
            string imageName = new string(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ', '-');
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images", imageName);
            using (var filestream =new FileStream(imagePath,FileMode.Create))
            {
                await imageFile.CopyToAsync(filestream);
            }
            return imageName;
        }
   
             [NonAction]
             public void DeleteImage(string imageName)
             {
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images", imageName);
                if (System.IO.File.Exists(imagePath))
                   System.IO.File.Delete(imagePath);
        
             }
    
    }
}
