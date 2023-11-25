using RegistroTareasEntities.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RegistroTareasLogicaNegocio.Interfaces
{
    public interface ITareaBL
    {
        RespuestaDto Listar(int id);
        RespuestaDto ObtenerInfo(int id);
        RespuestaDto Insertar(TareaDto dto);
        RespuestaDto Actualizar(TareaDto dto);
        RespuestaDto Eliminar(int id);
    }
}
