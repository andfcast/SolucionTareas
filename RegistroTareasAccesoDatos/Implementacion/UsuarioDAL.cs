using RegistroTareasAccesoDatos.Interfaces;
using RegistroTareasEntities.BDEntities;
using RegistroTareasEntities.DTO;
using RegistroTareasEntities.Utilities;

namespace RegistroTareasAccesoDatos.Implementacion
{
    public class UsuarioDAL : IUsuarioDAL
    {
        private readonly RegistroTareasBDContext _context;

        public UsuarioDAL(RegistroTareasBDContext context)
        {
            _context = context;
        }
        public bool Crear(UsuarioDto dto, ref string error)
        {
            try
            {
                if (_context.Usuarios.Count(x => x.Email.ToLower() == dto.Email.ToLower()) > 0)
                {
                    error = "Ya existe un registro con los mismos valores. Favor revisar";
                    return false;
                }
                Usuario nuevoUsuario = Convertidor.AUsuario(dto);
                nuevoUsuario.FechaCreacion = DateTime.Now;
                _context.Usuarios.Add(nuevoUsuario);
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public UsuarioDto ObtenerInfo(string nomUsuario)
        {
            return Convertidor.AUsuarioDto(_context.Usuarios.FirstOrDefault(x => x.Email == nomUsuario)!);
        }
    }
}
