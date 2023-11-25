using RegistroTareasEntities.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RegistroTareasLogicaNegocio.Interfaces
{
    public interface IUsuarioBL
    {
        RespuestaDto Insertar(UsuarioDto dto);
    }
}
