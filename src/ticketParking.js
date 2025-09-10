
function mostrar(horaEntrada, horaSalida){
    let Entrada = new Date (horaEntrada); 
    let Salida = new Date (horaSalida); 
    return Entrada.getTime() === Salida.getTime()? "Error, no se puede ingresar fechas iguales": 
    Salida.getTime() < Entrada.getTime()? "Error, la hora de salida no puede ser anterior a la de entrada" : 
    "De " + Entrada.toLocaleString('es-BO', { hour12: false }) + " hasta " + Salida.toLocaleString('es-BO', { hour12: false }); 
}

export default mostrar; 