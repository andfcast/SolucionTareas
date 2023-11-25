using RegistroTareasAccesoDatos.Interfaces;
using RegistroTareasEntities.DTO;
using RegistroTareasLogicaNegocio.Interfaces;


namespace RegistroTareasLogicaNegocio.Implementacion
{
    public class UsuarioBL : IUsuarioBL
    {
        private IUsuarioDAL _entidadDal;
        public UsuarioBL(IUsuarioDAL entidadDal) {
            _entidadDal = entidadDal;
        }

        public RespuestaDto Insertar(UsuarioDto dto)
        {
            string msgProceso = "OK";
            bool esExitoso = _entidadDal.Crear(dto, ref msgProceso);
            return new RespuestaDto
            {
                Exitoso = esExitoso,
                Mensaje = msgProceso
            };
        }
    }    
}
