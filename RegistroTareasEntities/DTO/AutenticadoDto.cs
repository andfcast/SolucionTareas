using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RegistroTareasEntities.DTO
{
    public class AutenticadoDto : UsuarioDto
    {
        public string Token { get; set; }
    }
}
