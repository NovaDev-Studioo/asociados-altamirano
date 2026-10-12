/* ======================================================
   PROPIEDAD INTELECTUAL Y DESARROLLO
   Desarrollado por: Jesús Alfredo Altamirano Torres
   Proyecto: Landing Page Altamirano y Asociados
   ====================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const agendaForm = document.getElementById('agenda-form');

    if (agendaForm) {
        agendaForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nombre = document.getElementById('nombre').value;
            const telefono = document.getElementById('telefono').value;
            const area = document.getElementById('area').value;
            const horario = document.getElementById('horario').value;
            const mensaje = document.getElementById('mensaje').value;

            // Mensaje corto y directo
            const textoWhatsApp = 
                `Hola, me gustaría agendar una asesoría legal.%0A%0A` +
                `• Nombre: ${encodeURIComponent(nombre)}%0A` +
                `• Teléfono: ${encodeURIComponent(telefono)}%0A` +
                `• Área: ${encodeURIComponent(area)}%0A` +
                `• Horario: ${encodeURIComponent(horario)}%0A` +
                `• Consulta: ${encodeURIComponent(mensaje)}`;

            const targetNumber = typeof numeroWhatsApp !== 'undefined' ? numeroWhatsApp : "522211273217";
            const url = `https://wa.me/${targetNumber}?text=${textoWhatsApp}`;

            window.open(url, '_blank');
        });
    }
});