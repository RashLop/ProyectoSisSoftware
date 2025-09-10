
function mostrar(horaEntrada, horaSalida){
    let Entrada = new Date (horaEntrada); 
    let Salida = new Date (horaSalida); 
    return horaEntrada === horaSalida? "Error, no se pude ingresar fechas iguales": "De " + Entrada.toLocaleString('es-BO', { hour12: false }) + " hasta " + Salida.toLocaleString('es-BO', { hour12: false }); 
}

export default mostrar; 