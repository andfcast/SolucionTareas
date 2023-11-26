export class Tarea {
    id!:number;
    idUsuario!:number;
    nombre!:string;
    descripcion!:string;
    fechaInicio!:Date;
    fechaFin!:Date;
    horas!:number;
    esCompletada:boolean = false;
    fechaCreacion!:Date;
    fechaModificacion!:Date;
}
