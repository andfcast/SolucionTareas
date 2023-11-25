using System;
using System.Collections.Generic;

namespace RegistroTareasEntities.BDEntities
{
    public partial class Usuario
    {
        public Usuario()
        {
            Tareas = new HashSet<Tarea>();
        }

        public int Id { get; set; }
        public string Nombre { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;
        public DateTime FechaCreacion { get; set; }

        public virtual ICollection<Tarea> Tareas { get; set; }
    }
}
