using RegistroTareasAccesoDatos.Interfaces;
using RegistroTareasEntities.DTO;
using RegistroTareasLogicaNegocio.Interfaces;

namespace RegistroTareasLogicaNegocio.Implementacion
{
    public class TareaBL : ITareaBL
    {
        private ITareaDAL _entidadDal;
        public TareaBL(ITareaDAL entidadDAL)
        {
            _entidadDal = entidadDAL;            
        }
        public RespuestaDto Actualizar(TareaDto dto)
        {
            string msgProceso = "OK";
            bool esExitoso = _entidadDal.Actualizar(dto, ref msgProceso);
            return new RespuestaDto
            {
                Exitoso = esExitoso,
                Mensaje = msgProceso
            };
        }

        public RespuestaDto Eliminar(int id)
        {
            bool esExitoso = _entidadDal.Borrar(id);
            return new RespuestaDto
            {
                Exitoso = esExitoso,
                Mensaje = esExitoso ? "OK" : "Error"
            };
        }

        public RespuestaDto Insertar(TareaDto dto)
        {
            string msgProceso = "OK";
            bool esExitoso = _entidadDal.Crear(dto, ref msgProceso);
            return new RespuestaDto
            {
                Exitoso = esExitoso,
                Mensaje = msgProceso
            };
        }

        public RespuestaDto Listar(int id)
        {
            return new RespuestaDto
            {
                Exitoso = true,
                Mensaje = "OK",
                Data = _entidadDal.Listar(id)
            };
        }

        public RespuestaDto ObtenerInfo(int id)
        {
            var info = _entidadDal.ObtenerInfo(id);
            return new RespuestaDto
            {
                Exitoso = info != null ? true : false,
                Mensaje = info != null ? "OK" : "Error",
                Data = info!
            };
        }
    }
}
