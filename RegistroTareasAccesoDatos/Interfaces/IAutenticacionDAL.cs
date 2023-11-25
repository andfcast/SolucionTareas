using RegistroTareasEntities.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RegistroTareasAccesoDatos.Interfaces
{
    public interface IAutenticacionDAL
    {
        bool Autenticar(LoginDto dto);
    }
}
