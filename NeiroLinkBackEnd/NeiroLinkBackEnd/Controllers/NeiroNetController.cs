using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NeiroLinkBackEnd.Helpers;
using NeiroLinkBackEnd.Models.ApiParams;
using NeiroNetInterfaces.Interfaces;
using System;
using System.Drawing;

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

        [HttpGet]
        public IActionResult GetLiteras()
        {
            string[] literas = _neironService.GetLiteras();

            return Ok(new { literas });
        }

        [HttpPost("Recornize")]
        public IActionResult Recognize([FromBody] RecognizeTextModel model)
        {
            int[,] data = GetDataFromBase64Image(model);
            string result = _neironService.CheckLitera(data);

            return Ok(new { result });
        }

        [HttpPost("Learn")]
        public IActionResult Learn([FromBody] LearnSymbolModel model)
        {
            int[,] data = GetDataFromBase64Image(model);
            _neironService.SetTraining(model.SymbolToLearn, data);

            return GetLiteras();
        }

        private int[,] GetDataFromBase64Image(RecognizeTextModel model)
        {
            int[,] data = NeiroGraphUtils.CutImageToArray(model.Image, new Point(model.Width, model.Height));
            return NeiroGraphUtils.LeadArray(data, new int[10, 10]);
        }
    }
}
