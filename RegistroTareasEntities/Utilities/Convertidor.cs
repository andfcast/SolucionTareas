﻿using RegistroTareasEntities.BDEntities;
using RegistroTareasEntities.DTO;
namespace RegistroTareasEntities.Utilities
{
    public static class Convertidor
    {
        #region Usuario
        public static Usuario AUsuario(RegistroUsuarioDto dto)
        {
            return new Usuario
            {
                Id = dto.Id,
                Nombre = dto.Nombre,
                Email = dto.Email,
                Password = dto.Pass
            };
        }

        public static RegistroUsuarioDto AUsuarioDto(Usuario entidad)
        {
            return new RegistroUsuarioDto
            {
                Id = entidad.Id,
                Nombre = entidad.Nombre,
                Email = entidad.Email,
                Pass = entidad.Password
            };
        }

        public static AutenticadoDto AUsuarioAutenticadoDto(Usuario entidad)
        {
            return new AutenticadoDto
            {
                Id = entidad.Id,
                Nombre = entidad.Nombre,
                Email = entidad.Email,                
            };
        }
        #endregion

        #region Tarea
        public static Tarea ATarea(TareaDto dto)
        {
            return new Tarea
            {
                Id = dto.Id,
                Nombre = dto.Nombre,
                IdUsuario = dto.IdUsuario,
                Descripcion = dto.Descripcion,
                FechaInicio = dto.FechaInicio,
                FechaFin = dto.FechaFin,
                FechaCreacion = dto.FechaCreacion,
                FechaModificacion = dto.FechaModificacion,
                Horas = dto.Horas,
                Completado = dto.EsCompletada                
            };
        }

        public static TareaDto ATareaDto(Tarea entidad)
        {
            return new TareaDto
            {
                Id = entidad.Id,
                Nombre = entidad.Nombre,
                IdUsuario = entidad.IdUsuario,
                Descripcion = entidad.Descripcion,
                FechaInicio = entidad.FechaInicio,
                FechaFin = entidad.FechaFin,
                FechaCreacion = entidad.FechaCreacion,
                FechaModificacion = entidad.FechaModificacion,
                Horas = entidad.Horas,
                EsCompletada = entidad.Completado
            };
        }
        #endregion        
    }
}
