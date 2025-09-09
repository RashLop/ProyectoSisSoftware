import mostrar from "./ticketParking";

describe("TicketParking", () => {
    it("se debe de ingresar una hora de entrada y salida", () => {
        expect(mostrar()).toEqual("De 9/9/2025, 10:30:00 a.m. hasta 9/9/2025, 10:40:00 a.m."); 
    }); 
}); 