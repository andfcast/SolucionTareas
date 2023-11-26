using Microsoft.EntityFrameworkCore;
using RegistroTareasAccesoDatos.Implementacion;
using RegistroTareasAccesoDatos.Interfaces;
using RegistroTareasEntities.BDEntities;
using RegistroTareasLogicaNegocio.Implementacion;
using RegistroTareasLogicaNegocio.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:4200")
                            .AllowAnyHeader()
                            .AllowAnyMethod();
                      });
});
builder.Services.AddDbContext<RegistroTareasBDContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("RegistroBDConnection")));

builder.Services.AddTransient<IAutenticacionBL, AutenticacionBL>();
builder.Services.AddTransient<IAutenticacionDAL, AutenticacionDAL>();
builder.Services.AddTransient<ITareaBL, TareaBL>();
builder.Services.AddTransient<ITareaDAL, TareaDAL>();
builder.Services.AddTransient<IUsuarioBL, UsuarioBL>();
builder.Services.AddTransient<IUsuarioDAL, UsuarioDAL>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
