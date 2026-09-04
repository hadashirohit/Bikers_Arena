using BikersArena.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BikersArena.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly ProductRepository _productRepository;

        public ProductController(ProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        [HttpGet("getproducts")]
        public IActionResult GetProducts(
            int? categoryId = null,
            int pageNumber = 1,
            int pageSize = 20)
        {
            try
            {
                var products = _productRepository.GetProducts(
                    categoryId,
                    pageNumber,
                    pageSize);

                return Ok(products);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new
                {
                    message = "Something went wrong.",
                    error = ex.Message
                });
            }
        }
    }
}
