import ticketParking from './ticketParking';

describe("TicketParking", () => {
    //Registrar hora de ingreso y Registrar hora de salida 
    it("se debe de ingresar una hora de entrada y salida", () => {
        let test = "2025-09-09T10:30";
        let test2 = "2025-09-09T10:40";
        let ticket = new ticketParking(test,test2); 
        expect(ticket.mostrarFechas()).toEqual("De 9/9/2025, 10:30:00 hasta 9/9/2025, 10:40:00"); 
    });

    //Registrar hora de ingreso y Registrar hora de salida 
    it("Se debe de mostrar la hora de entrada y salida", () => {
        let test = "2025-09-09T10:30";
        let test2 = "2025-09-09T10:50";
        let ticket = new ticketParking(test,test2); 
        expect(ticket.mostrarFechas()).toEqual("De 9/9/2025, 10:30:00 hasta 9/9/2025, 10:50:00");  
    }); 

    // **validar que la hora entrada y salida no sean la misma
    it("al ingresar datos similares, lanzar un mensaje de error", () => {
        let test = "2025-09-09T10:30";
        let ticket = new ticketParking(test,test); 
        expect(ticket.mostrarFechas()).toEqual("Error, no se puede ingresar fechas iguales"); 
    });

    // **Validar que la hora de salida no sea anterior a la hora de entrada 
    it("Si se pone una hora de salida anterior a la entrada, se da error",() =>{
        let test = "2025-09-09T10:30";
        let test2 = "2025-09-08T10:10";
        let ticket = new ticketParking(test,test2); 
        expect(ticket.mostrarFechas()).toEqual("Error, la hora de salida no puede ser anterior a la de entrada")
    });

  //Mostrar la tarifa base 10.00 Bs la hora
    it("Se debe de calcular la tarifa basica de una hora", () => {
        let test = "2025-09-09T10:30";
        let test2 = "2025-09-08T11:30";
        let ticket = new ticketParking(test,test2); 
        expect(ticket.calcular()).toEqual(10); 
    })

      //Mostrar la tarifa base 20.00 Bs la hora
    it("Se debe de calcular la tarifa basica de una hora", () => {
        let test = "2025-09-09T10:30";
        let test2 = "2025-09-08T12:30";
        let ticket = new ticketParking(test,test2); 
        expect(ticket.calcular()).toEqual(20); 
    })

     //**Redondear siempre hacia arriba al cobrar por hora o fraccion 
    it("Se debe de calcular la tarifa basica de una hora, pero redondeando hacia arriba", () => {
        let test = "2025-09-09T10:00";
        let test2 = "2025-09-09T12:30";
        let ticket = new ticketParking(test,test2); 
        expect(ticket.calcular()).toEqual(30); 
    })

    // **Redondear siempre hacia arriba al cobrar por hora o fraccion 
        it("Se debe de calcular la tarifa basica de una hora, pero redondeando hacia arriba", () => {
        let test = "2025-09-09T10:15";
        let test2 = "2025-09-09T12:30";
        let ticket = new ticketParking(test,test2); 
        expect(ticket.calcular()).toEqual(30); 
    })

        // **Mostrar Monto total con dos decimales
        it("Se debe de calcular la tarifa basica de una hora, pero redondeando hacia arriba", () => {
        let test = "2025-09-09T10:15";
        let test2 = "2025-09-09T12:30";
        let ticket = new ticketParking(test,test2); 
        expect(ticket.Tarifa()).toEqual(30.00); 
    })
});  