export class Utilities{
    static CambioUrl(ruta:string,veces:number):string{        
        let retorno: string = ruta;
        let rutaCambio: any;
        for(let i = 1; i <= veces;i++){
            rutaCambio = retorno.split('/').pop();
            retorno = retorno.replace('/' + rutaCambio,'');    
        }         
        return retorno;    
    }
}
