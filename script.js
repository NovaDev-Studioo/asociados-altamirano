/* 
  Desarrollado por: Jesús Alfredo Altamirano Torres
  Proyecto: Asociados Altamirano
  Todos los derechos reservados.
*/

document.addEventListener('DOMContentLoaded', () => {
    const numeroWhatsApp = "522211273217";

    const modal = document.getElementById('modal-agenda');
    const openBtns = document.querySelectorAll('.open-modal');
    const closeBtn = document.querySelector('.close-modal');

    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'flex';
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    const agendaForm = document.getElementById('agenda-form');
    if (agendaForm) {
        agendaForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nombre = document.getElementById('nombre').value;
            const telefono = document.getElementById('telefono').value;
            const area = document.getElementById('area').value;
            const horario = document.getElementById('horario').value;
            const mensaje = document.getElementById('mensaje').value;

            const textoWA = `Hola, me gustaría agendar una asesoría legal.%0A%0A` +
                            `*Nombre:* ${encodeURIComponent(nombre)}%0A` +
                            `*Teléfono:* ${encodeURIComponent(telefono)}%0A` +
                            `*Área Legal:* ${encodeURIComponent(area)}%0A` +
                            `*Horario Preferido:* ${encodeURIComponent(horario)}%0A` +
                            `*Consulta:* ${encodeURIComponent(mensaje)}`;

            window.open(`https://wa.me/${numeroWhatsApp}?text=${textoWA}`, '_blank');
        });
    }

    const modalForm = document.getElementById('modal-form');
    if (modalForm) {
        modalForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre = document.getElementById('modal-nombre').value;
            const telefono = document.getElementById('modal-tel').value;

            const textoWA = `Hola, solicito una consulta rápida.%0A%0A` +
                            `*Nombre:* ${encodeURIComponent(nombre)}%0A` +
                            `*Teléfono:* ${encodeURIComponent(telefono)}`;

            window.open(`https://wa.me/${numeroWhatsApp}?text=${textoWA}`, '_blank');
            modal.style.display = 'none';
        });
    }

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card-servicio, .form-wrapper, .nosotros-text').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
});