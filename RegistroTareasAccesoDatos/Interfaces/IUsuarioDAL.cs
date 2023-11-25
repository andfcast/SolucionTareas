using RegistroTareasEntities.DTO;

namespace RegistroTareasAccesoDatos.Interfaces
{
    public interface IUsuarioDAL
    {
        bool Crear(UsuarioDto dto, ref string error);
        UsuarioDto ObtenerInfo(string nomUsuario);
    }
}
