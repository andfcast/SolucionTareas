using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using RegistroTareasEntities.Autenticacion;
using RegistroTareasEntities.DTO;
using RegistroTareasLogicaNegocio.Interfaces;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TareasWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _configuracion;
        private readonly IAutenticacionBL _autenticacionBL;

        public AuthController(IConfiguration configuracion, IAutenticacionBL autenticacionBL)
        {
            _autenticacionBL = autenticacionBL;
            _configuracion = configuracion;
        }
        // GET: api/<AuthController>
        [HttpPost("[action]")]
        public RespuestaDto Autenticar([FromBody] LoginDto dto)
        {
            RespuestaDto res = _autenticacionBL.Autenticar(dto);
            if (res.Exitoso) {
                AutenticadoDto info = (AutenticadoDto)res.Data;
                info.Token = GenerarToken(info);
                res.Data = info;
            }
            return res;
        }        
        
        private string GenerarToken(UsuarioDto dto){
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, dto.Email),
                new Claim(ClaimTypes.Role, "Admin")
            };

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(
                _configuracion.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: creds);

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }
    }
}
