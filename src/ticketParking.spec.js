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
        let test2 = "2025-09-09T11:30";
        let ticket = new ticketParking(test,test2); 
        expect(ticket.calcular()).toEqual(10); 
    })

      //Mostrar la tarifa base 20.00 Bs la hora
    it("Se debe de calcular la tarifa basica de una hora", () => {
        let test = "2025-09-09T10:30";
        let test2 = "2025-09-09T12:30";
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
        expect(ticket.tarifaDiaria()).toEqual(30.00); 
    })

    
        // **Limite diario de 50 bs como tope maximo, o sea 5 horas.
        it("Se debe de calcular la tarifa basica de una hora, pero redondeando hacia arriba", () => {
        let test = "2025-09-09T10:00";
        let test2 = "2025-09-09T15:30";
        let ticket = new ticketParking(test,test2); 
        expect(ticket.tarifaDiaria()).toEqual("Error, el limite diario son solo 50.00 bs"); 
    })

    // **Las horas nocturnas tienen diferente tarifa
        it("Se debe de calcular la tarifa basica de una hora, pero redondeando hacia arriba", () => {
        let test = "2025-09-09T22:00";
        let test2 = "2025-09-10T06:00";
        let ticket = new ticketParking(test,test2); 
        expect(ticket.tarifaDiaria()).toEqual(48); 
    })

        //Registrar hora de ingreso y Registrar hora de salida 
    it("Se debe de mostrar la hora de entrada y salida", () => {
        let test = "2025-09-09T18:00";
        let test2 = "2025-09-09T23:00";
        let ticket = new ticketParking(test,test2); 
        expect(ticket.tarifaDiaria()).toEqual(46); ;  
    });

    //GenerarunticketBasico
    it("Se debe de generar un ticket basico con la entrada y salida del parking", () => {       
        let entrada  = "2025-09-09T18:00";
        let salida = "2025-09-09T23:00";
        let ticket = new ticketParking(entrada, salida);
        let test = {
        detalle: "De 9/9/2025, 18:00:00 hasta 9/9/2025, 23:00:00",
        total: "46.00"
        }
        expect(ticket.generarTicket()).toEqual(JSON.stringify(test,null,2)); 
    }); 
    
        it("Se debe de generar un ticket basico con la entrada y salida del parking", () => {       
        let entrada  = "2025-09-09T20:00";
        let salida = "2025-09-09T23:00";
        let ticket = new ticketParking(entrada, salida);
        let test = {
        detalle: "De 9/9/2025, 20:00:00 hasta 9/9/2025, 23:00:00",
        total: "26.00"
        }
        expect(ticket.generarTicket()).toEqual(JSON.stringify(test,null,2)); 
    }); 
        //*** reemplzar el calculo normal por una penalidad de 80 Bs si se pierde el ticket 
        it("Se perdio el ticket", () => {       
        let entrada  = "2025-09-09T20:00";
        let salida = "2025-09-09T23:00";
        let ticket = new ticketParking(entrada, salida);
        ticket.Estado = false; 
        expect(ticket.tarifaDiaria()).toEqual(80.00); 
    }); 

});  