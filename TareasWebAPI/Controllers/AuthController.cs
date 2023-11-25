using Microsoft.AspNetCore.Mvc;
using RegistroTareasEntities.DTO;
using RegistroTareasLogicaNegocio.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TareasWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAutenticacionBL _autenticacionBL;

        public AuthController(IAutenticacionBL autenticacionBL)
        {
            _autenticacionBL = autenticacionBL;
        }
        // GET: api/<AuthController>
        [HttpPost("[action]")]
        public RespuestaDto Autenticar([FromBody] LoginDto dto)
        {
            return _autenticacionBL.Autenticar(dto);
        }        
    }
}
