using RegistroTareasAccesoDatos.Interfaces;
using RegistroTareasEntities.DTO;
using RegistroTareasLogicaNegocio.Interfaces;

namespace RegistroTareasLogicaNegocio.Implementacion
{
    public class AutenticacionBL : IAutenticacionBL
    {
        private readonly IAutenticacionDAL _entidadDal;
        private readonly IUsuarioDAL _usuarioDal;

        public AutenticacionBL(IAutenticacionDAL entidadDAL, IUsuarioDAL usuarioDal)
        {
            _entidadDal = entidadDAL;
            _usuarioDal = usuarioDal;
        }

        public RespuestaDto Autenticar(LoginDto dto)
        {
            RespuestaDto respuesta = new RespuestaDto();
            respuesta.Exitoso = _entidadDal.Autenticar(dto);
            if (respuesta.Exitoso)
            {
                AutenticadoDto usuario = _usuarioDal.ObtenerInfo(dto.Usuario);
                respuesta.Data = usuario;
            }
            else {
                respuesta.Mensaje = "Credenciales incorrectas.";
            }
            return respuesta;
        }
    }
}
