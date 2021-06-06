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
    public class FeedBacksController : ControllerBase
    {
        private readonly OTDBContext _context;
        private readonly IWebHostEnvironment _hostEnvironment;

        public FeedBacksController(OTDBContext context, IWebHostEnvironment hostEnvironment)
        {
            _context = context;
            this._hostEnvironment = hostEnvironment;
        }

        // GET: api/FeedBacks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FeedBack>>> GetFeedBacks()
        {
            return await _context.FeedBacks
                 .Select(x => new FeedBack()
                 {
                     UserId = x.UserId,
                     Email = x.Email,
                     Feedback = x.Feedback,
                     }).ToListAsync();
        }

        // GET: api/FeedBacks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FeedBack>> GetFeedBack(int id)
        {
            var feedBack = await _context.FeedBacks.FindAsync(id);

            if (feedBack == null)
            {
                return NotFound();
            }

            return feedBack;
        }

        // PUT: api/FeedBacks/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFeedBack(int id, FeedBack feedBack)
        {
            if (id != feedBack.UserId)
            {
                return BadRequest();
            }

            _context.Entry(feedBack).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FeedBackExists(id))
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

        // POST: api/FeedBacks
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<FeedBack>> PostFeedBack([FromForm] FeedBack feedBack)
        {
           feedBack.FeedbackName = await SaveFeedback(feedBack.FeedbackFile);

            _context.FeedBacks.Add(feedBack);
            await _context.SaveChangesAsync();

            return StatusCode(201);

           
        }

        // DELETE: api/FeedBacks/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<FeedBack>> DeleteFeedBack(int id)
        {
            var feedBack = await _context.FeedBacks.FindAsync(id);
            if (feedBack == null)
            {
                return NotFound();
            }

            _context.FeedBacks.Remove(feedBack);
            await _context.SaveChangesAsync();

            return feedBack;
        }

        private bool FeedBackExists(int id)
        {
            return _context.FeedBacks.Any(e => e.UserId == id);
        }

        [NonAction]
        public async Task<string> SaveFeedback(IFormFile feedbackFile)
        {
            string feedbackName = new string(Path.GetFileNameWithoutExtension(feedbackFile.FileName).Take(10).ToArray()).Replace(' ', '-');
            feedbackName = feedbackName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(feedbackFile.FileName);
            var feedbackPath = Path.Combine(_hostEnvironment.ContentRootPath, "Feedbacks", feedbackName);
            using (var filestream = new FileStream(feedbackPath, FileMode.Create))
            {
                await feedbackFile.CopyToAsync(filestream);
            }
            return feedbackName;
        }

    }
}
