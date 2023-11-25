using Microsoft.AspNetCore.Mvc;
using RegistroTareasEntities.DTO;
using RegistroTareasLogicaNegocio.Implementacion;
using RegistroTareasLogicaNegocio.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TareasWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioBL _usuarioBL;

        public UsuarioController(IUsuarioBL usuarioBL)
        {
            _usuarioBL = usuarioBL;
        }

        // POST api/<TareaController>
        [HttpPost("[action]")]
        public RespuestaDto Crear([FromBody] UsuarioDto dto)
        {
            return _usuarioBL.Insertar(dto);
        }
    }
}
