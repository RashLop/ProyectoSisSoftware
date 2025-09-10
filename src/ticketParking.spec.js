import mostrar from "./ticketParking";

describe("TicketParking", () => {
    //Registrar hora de ingreso y Registrar hora de salida 
    it("se debe de ingresar una hora de entrada y salida", () => {
        let test = "2025-09-09T10:30";
        let test2 = "2025-09-09T10:40";
        expect(mostrar(test, test2)).toEqual("De 9/9/2025, 10:30:00 hasta 9/9/2025, 10:40:00"); 
    });

    //Registrar hora de ingreso y Registrar hora de salida 
    it("Se debe de mostrar la hora de entrada y salida", () => {
        let test = "2025-09-09T10:30";
        let test2 = "2025-09-09T10:50";
        expect(mostrar(test, test2)).toEqual("De 9/9/2025, 10:30:00 hasta 9/9/2025, 10:50:00");  
    }); 

    // **validar que la hora entrada y salida no sean la misma
    it("al ingresar datos similares, lanzar un mensaje de error", () => {
        let test = "2025-09-09T10:30";
        expect(mostrar(test, test)).toEqual("Error, no se puede ingresar fechas iguales"); 
    });

    // **Validar que la hora de salida no sea anterior a la hora de entrada 
    it("Si se pone una hora de salida anterior a la entrada, se da error",() =>{
        let test = "2025-09-09T10:30";
        let test2 = "2025-09-08T10:10";
        expect(mostrar(test, test2)).toEqual("Error, la hora de salida no puede ser anterior a la de entrada")
    });
    
});  