// src/presenter.js
import ticketParking from "./ticketParking.js";

// DOM
const form         = document.querySelector("#IngresarHoraEntrada-form");
const horaEntrada  = document.querySelector("#hora_entrada");
const horaSalida   = document.querySelector("#hora_salida");
const div          = document.querySelector("#mostrarTicket-div");
const btnPerdido   = document.querySelector("#perdido-button");

// guardamos la instancia para poder actualizarla al reportar pérdida
let ticket = null;

// helper para pintar el JSON que devuelva generarTicket()
function renderTicketJSON() {
  if (!ticket) return;
  const payload = ticket.generarTicket();           // puede ser string o objeto
  const jsonStr = typeof payload === "string" ? payload : JSON.stringify(payload, null, 2);
  div.innerHTML = `<pre style="margin:0; white-space:pre-wrap">${jsonStr}</pre>`;
}

form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const entrada = horaEntrada.value;   // "YYYY-MM-DDTHH:mm"
  const salida  = horaSalida.value;

  if (!entrada || !salida) {
    div.textContent = "Completa ambas fechas.";
    ticket = null;
    return;
  }

  try {
    ticket = new ticketParking(entrada, salida); // Estado inicia true en tu clase
    renderTicketJSON();
  } catch (err) {
    div.textContent = err?.message ?? "Error al generar el ticket";
    ticket = null;
  }
});

// Reportar ticket perdido → Estado=false y recalcular total vía tarifaDiaria()
btnPerdido?.addEventListener("click", () => {
  if (!ticket) {
    div.textContent = "Primero genera un ticket antes de reportar pérdida.";
    return;
  }
  ticket.Estado = false; // marcar como perdido
  renderTicketJSON();
});
