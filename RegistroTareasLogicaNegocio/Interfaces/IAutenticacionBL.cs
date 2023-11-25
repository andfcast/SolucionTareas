
using RegistroTareasEntities.DTO;

namespace RegistroTareasLogicaNegocio.Interfaces
{
    public interface IAutenticacionBL
    {
        RespuestaDto Autenticar(LoginDto dto);
    }
}
