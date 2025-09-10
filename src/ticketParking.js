export default class ticketParking
{
    constructor(horaEntrada, horaSalida){
        this.Entrada =  new Date(horaEntrada);
        this.Salida = new Date(horaSalida); 
    }
    mostrar(){

    return this.Entrada.getTime() === this.Salida.getTime()? "Error, no se puede ingresar fechas iguales": 
    this.Salida.getTime() < this.Entrada.getTime()? "Error, la hora de salida no puede ser anterior a la de entrada" : 
    "De " + this.Entrada.toLocaleString('es-BO', { hour12: false }) + " hasta " + this.Salida.toLocaleString('es-BO', { hour12: false }); 
    }
}