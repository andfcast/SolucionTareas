using RegistroTareasAccesoDatos.Interfaces;
using RegistroTareasEntities.BDEntities;
using RegistroTareasEntities.DTO;
using RegistroTareasEntities.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RegistroTareasAccesoDatos.Implementacion
{
    public class TareaDAL : ITareaDAL
    {
        private readonly RegistroTareasBDContext _context;

        public TareaDAL(RegistroTareasBDContext context)
        {
            _context = context;
        }

        public bool Actualizar(TareaDto dto, ref string error)
        {
            try
            {
                if (_context.Tareas.Count(x => x.Nombre.ToLower() == dto.Nombre.ToLower() && x.FechaInicio == dto.FechaInicio && x.FechaFin == dto.FechaFin 
                                        && x.IdUsuario == dto.IdUsuario && x.Id != dto.Id) > 0)
                {
                    error = "Ya existe un registro con los mismos valores. Favor revisar";
                    return false;
                }
                _context.Tareas.Update(Convertidor.ATarea(dto));
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public bool Borrar(int id)
        {
            var tarea = _context.Tareas.FirstOrDefault(x => x.Id == id);
            try
            {
                _context.Tareas.Remove(tarea);
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public bool Crear(TareaDto dto, ref string error)
        {
            try
            {
                if (_context.Tareas.Count(x => x.Nombre.ToLower() == dto.Nombre.ToLower() && x.FechaInicio == dto.FechaInicio 
                                            && x.FechaFin == dto.FechaFin && x.IdUsuario == dto.IdUsuario) > 0)
                {
                    error = "Ya existe un registro con los mismos valores. Favor revisar";
                    return false;
                }
                _context.Tareas.Add(Convertidor.ATarea(dto));
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public List<TareaDto> Listar(int id)
        {
            List<TareaDto> lstTareas = new List<TareaDto>();
            foreach (var item in _context.Tareas.Where(x => x.IdUsuario == id).ToList())
            {
                lstTareas.Add(Convertidor.ATareaDto(item));
            }
            return lstTareas;
        }

        public TareaDto ObtenerInfo(int id)
        {
            return Convertidor.ATareaDto(_context.Tareas.FirstOrDefault(x => x.Id == id)!);
        }
    }
}
