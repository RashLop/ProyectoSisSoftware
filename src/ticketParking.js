export default class ticketParking
{
    constructor(horaEntrada, horaSalida){
        this.Entrada =  new Date(horaEntrada);
        this.Salida = new Date(horaSalida); 
        this.Estado = true; 
    }

    mostrarFechas(){
    return this.Entrada.getTime() === this.Salida.getTime()? "Error, no se puede ingresar fechas iguales": 
    this.Salida.getTime() < this.Entrada.getTime()? "Error, la hora de salida no puede ser anterior a la de entrada" : 
    "De " + this.Entrada.toLocaleString('es-BO', { hour12: false }) + " hasta " + this.Salida.toLocaleString('es-BO', { hour12: false }); 
    }
    contarHoras() {
    let nocturnas = 0;
    let diurnas = 0;

    let difMs = this.Salida - this.Entrada;
    let difHoras = difMs / (1000 * 60 * 60);

    let actual = new Date(this.Entrada);

    for (let i = 0; i < Math.ceil(difHoras); i++) {
        let hora = actual.getHours();

        if (hora >= 22 || hora < 6) {
            nocturnas++;
        } else {
            diurnas++;
        }

    actual.setHours(actual.getHours() + 1);
    }

    return { nocturnas, diurnas };
    }

    calcular(){   
    const { nocturnas, diurnas } = this.contarHoras();
    let total = nocturnas * 6 + diurnas * 10;
        return total;
    }

    tarifaDiaria()
    {

        return this.Estado === false? 80.00: this.calcular() <= 50? Number(this.calcular().toFixed(2)): "Error, el limite diario son solo 50.00 bs"; 
    }

    generarTicket(){
        let ticket =  {
            detalle: this.mostrarFechas(),                   
            total: this.calcular().toFixed(2)                
        }; 
        return  JSON.stringify(ticket,null,2);
    }

}