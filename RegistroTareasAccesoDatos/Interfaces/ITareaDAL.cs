using RegistroTareasEntities.DTO;

namespace RegistroTareasAccesoDatos.Interfaces
{
    public interface ITareaDAL
    {
        List<TareaDto> Listar(int id);
        TareaDto ObtenerInfo(int id);
        bool Crear(TareaDto dto, ref string error);
        bool Actualizar(TareaDto dto, ref string error);
        bool Borrar(int id);
    }
}
