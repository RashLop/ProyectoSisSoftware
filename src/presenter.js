import ticketParking from "./ticketParking.js"; // importa la clase (default)

const form = document.querySelector("#IngresarHoraEntrada-form");
const horaEntrada = document.querySelector("#hora_entrada");
const horaSalida = document.querySelector("#hora_salida");
const div = document.querySelector("#mostrarTicket-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const entrada = horaEntrada.value; 
  const salida  = horaSalida.value;

  if (!entrada || !salida) {
    div.textContent = "Completa ambas fechas.";
    return;
  }

  try {
    const ticket = new ticketParking(entrada, salida);
    const payload = ticket.generarTicket();

    const jsonString = typeof payload === "string"
      ? payload
      : JSON.stringify(payload, null, 2);

    div.innerHTML = `<pre style="margin:0">${jsonString}</pre>`;
  } catch (err) {
    div.textContent = err?.message ?? "Error al generar el ticket";
  }
});