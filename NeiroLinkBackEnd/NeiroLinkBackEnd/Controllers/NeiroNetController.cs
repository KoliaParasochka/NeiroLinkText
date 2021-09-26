using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NeiroNetInterfaces.Interfaces;
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
        private readonly INeironService _neironService;

        public NeiroNetController(INeironService neironService)
        {
            _neironService = neironService;
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
