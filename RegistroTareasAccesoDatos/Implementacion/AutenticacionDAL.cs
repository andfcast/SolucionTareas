using RegistroTareasAccesoDatos.Interfaces;
using RegistroTareasEntities.BDEntities;
using RegistroTareasEntities.DTO;

namespace RegistroTareasAccesoDatos.Implementacion
{
    public class AutenticacionDAL : IAutenticacionDAL
    {
        private readonly RegistroTareasBDContext _context;

        public AutenticacionDAL(RegistroTareasBDContext context)
        {
            _context = context;
        }
        public bool Autenticar(LoginDto dto)
        {
            bool esValido = _context.Usuarios.Any(x => x.Email.ToLower() == dto.Usuario.ToLower() && x.Password.ToLower() == dto.Password.ToLower());
            return esValido;
        }
    }
}
