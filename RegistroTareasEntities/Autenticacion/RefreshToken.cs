using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RegistroTareasEntities.Autenticacion
{
    public class RefreshToken
    {
        public string Token { get; set; } = string.Empty;
        public DateTime FechaCreacion { get; set; } = DateTime.Now;
        public DateTime FechaExpiracion { get; set; }
    }
}
