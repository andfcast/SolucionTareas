
namespace RegistroTareasEntities.BDEntities
{
    public partial class Tarea
    {
        public int Id { get; set; }
        public int IdUsuario { get; set; }
        public string Nombre { get; set; } = null!;
        public string Descripcion { get; set; } = null!;
        public DateTime FechaInicio { get; set; }
        public DateTime FechaFin { get; set; }
        public int Horas { get; set; }
        public bool Completado { get; set; }
        public DateTime FechaCreacion { get; set; }
        public DateTime? FechaModificacion { get; set; }

        public virtual Usuario IdUsuarioNavigation { get; set; } = null!;
    }
}
