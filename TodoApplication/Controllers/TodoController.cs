using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Angular2Projects.Models;
using Angular2Projects.ViewModels;

namespace Angular2Projects.Controllers
{
    [Produces("application/json")]
    [Route("api/Todo")]
    public class TodoController : Controller
    {
        private readonly AppDbContext dbContext;

        public TodoController(AppDbContext context)
        {
            this.dbContext = context;
        }

        // GET api/todo
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(dbContext.Todos.ToList());
        }

        // GET api/todo/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var todo = dbContext.Todos.FirstOrDefault(x => x.Id == id);
            if (todo == null)
            {
                return NotFound();
            }
            return Ok(todo);

        }

        // POST api/todo
        [HttpPost]
        public IActionResult Post([FromBody]TodoViewModel item)
        {
            if (item == null)
            {
                return BadRequest();
            }

            Todo todoItem = new Todo
            {
                IsCompleted = item.IsCompleted,
                Text = item.Text
            };

            dbContext.Todos.Add(todoItem);
            dbContext.SaveChanges();
            return Ok();
        }

        // PUT api/todo/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]TodoViewModel item)
        {
            var itemToUpdate = dbContext.Todos.FirstOrDefault(x => x.Id == id);

            if (itemToUpdate == null)
            {
                return NotFound();
            }

            itemToUpdate.IsCompleted = item.IsCompleted;
            itemToUpdate.Text = item.Text;

            dbContext.SaveChanges();

            return Ok();
        }

        // DELETE api/todo/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var itemToRemove = dbContext.Todos.FirstOrDefault(x => x.Id == id);

            if (itemToRemove == null)
            {
                return NotFound();
            }

            dbContext.Todos.Remove(itemToRemove);
            dbContext.SaveChanges();

            return Ok();
        }
    }
}