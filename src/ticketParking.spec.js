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

    
});  