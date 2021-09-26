using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NeiroLinkBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NeiroNetController : ControllerBase
    {


        public NeiroNetController()
        {

        }

        [HttpPost("Recornize")]
        public IActionResult Recognize()
        {
            return Ok();
        }

        [HttpPost("Learn")]
        public IActionResult Learn()
        {
            return Ok();
        }
    }
}
