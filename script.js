// ================= AUDIO =================

let audioActual = null;
let botonActual = null;

function reproducirAudio(boton, audioId){

    const audio = document.getElementById(audioId);

    if(audioActual && audioActual !== audio){

        audioActual.pause();
        audioActual.currentTime = 0;

        if(botonActual){
            botonActual.innerHTML = "▶ Play";
        }

    }

    if(audio.paused){

        audio.play();
        boton.innerHTML = "⏸ Pause";

        audioActual = audio;
        botonActual = boton;

    }
    else{

        audio.pause();
        boton.innerHTML = "▶ Play";

        audioActual = null;
        botonActual = null;

    }

}


// ================= MENSAJE PLAYLIST =================

function mostrarMensajePlaylist(){

    const mensaje = document.getElementById("mensaje-playlist");

    mensaje.innerHTML = "Gracias por calificar mi playlist";

    mensaje.classList.add("mostrar");

    setTimeout(()=>{

        mensaje.classList.remove("mostrar");

    },3000);

}


// ================= ESTRELLAS =================

const stars = document.querySelectorAll('.star');

stars.forEach(star=>{

    star.addEventListener('click', function(){

        const valor = this.getAttribute('data-value');

        const contenedor = this.parentElement;

        const estrellas = contenedor.querySelectorAll('.star');

        estrellas.forEach(s=>{

            if(s.getAttribute('data-value') <= valor){
                s.classList.add('selected');
            }else{
                s.classList.remove('selected');
            }

        });

        mostrarMensajePlaylist();

    });

});


// ================= FORMULARIO =================

document.getElementById("form-musica").addEventListener("submit", function(e){

    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const cancion = document.getElementById("cancion").value;

    const mensaje = document.getElementById("mensaje");

    mensaje.innerHTML =
    "Gracias " + nombre + " por recomendar: " + cancion;

    mensaje.classList.add("mostrar");

    setTimeout(()=>{
        mensaje.classList.remove("mostrar");
    },4000);

    this.reset();

});