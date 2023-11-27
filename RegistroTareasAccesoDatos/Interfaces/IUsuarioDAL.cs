using RegistroTareasEntities.DTO;

namespace RegistroTareasAccesoDatos.Interfaces
{
    public interface IUsuarioDAL
    {
        bool Crear(RegistroUsuarioDto dto, ref string error);
        AutenticadoDto ObtenerInfo(string nomUsuario);
    }
}
