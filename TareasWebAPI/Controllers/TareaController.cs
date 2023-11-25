using Microsoft.AspNetCore.Mvc;
using RegistroTareasEntities.DTO;
using RegistroTareasLogicaNegocio.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TareasWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TareaController : ControllerBase
    {
        private readonly ITareaBL _tareaBL;

        public TareaController(ITareaBL tareaBL)
        {
            _tareaBL = tareaBL;
        }

        // GET: api/<TareaController>
        [HttpGet("[action]/{id}")]
        public RespuestaDto Listar(int id)
        {
            return _tareaBL.Listar(id);
        }

        // GET api/<TareaController>/5
        [HttpGet("[action]/{id}")]
        public RespuestaDto Obtener(int id)
        {
            return _tareaBL.ObtenerInfo(id);
        }

        // POST api/<TareaController>
        [HttpPost("[action]")]
        public RespuestaDto Crear([FromBody] TareaDto dto)
        {
            return _tareaBL.Insertar(dto);
        }

        // PUT api/<TareaController>/5
        [HttpPut("[action]/{id}")]
        public RespuestaDto Actualizar(int id, [FromBody] TareaDto dto)
        {
            return _tareaBL.Actualizar(dto);
        }

        // DELETE api/<TareaController>/5
        [HttpDelete("[action]/{id}")]
        public RespuestaDto Borrar(int id)
        {
            return _tareaBL.Eliminar(id);
        }
    }
}
