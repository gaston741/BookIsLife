console.log('profile.js seccess');

const $ = (element) => document.getElementById(element)

const regExLetter = /^[A-Z]+$/i;
const regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;


$('name').addEventListener('blur', function() {
    
    switch (true) {
        case !this.value.trim():
            $('nombreError').innerHTML = "Tienes que ingresar tu Nombre"
            this.classList.add('is-invalid')
            break;
        case !regExLetter.test(this.value.trim()) :
                $('nombreError').innerHTML = "Tiene que poner solo letras"
                this.classList.add('is-invalid')
                break
        case this.value.trim().length < 2 || this.value.trim().length > 255 : 
            $('nombreError').innerHTML = "Tu Nombre debe tener como minimo 2 caracteres"
            this.classList.add('is-invalid')
            break
        default:
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('nombreError').innerHTML = null;

            break;
    }
})

$('surname').addEventListener('blur', function() {
    
    switch (true) {
        case !this.value.trim():
            $('apellidoError').innerHTML = "Tienes que ingresar tu Apellido"
            this.classList.add('is-invalid')
            break;
        case !regExLetter.test(this.value.trim()) :
                $('apellidoError').innerHTML = "Tiene que poner solo letras"
                this.classList.add('is-invalid')
                break
        case this.value.trim().length < 2 || this.value.trim().length > 255 : 
            $('apellidoError').innerHTML = "Tu Apellido debe tener como minimo 2 caracteres"
            this.classList.add('is-invalid')
            break
        default:
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('apellidoError').innerHTML = null;

            break;
    }
})

/* $('avatar').addEventListener('blur', function() {
    
    switch (true) {
        case !this.value.trim():
            $('avatarError').innerHTML = "Tienes que ingresar tu imagen"
            this.classList.add('is-invalid')
            break;
        case !this.test(this.value.trim()) :
            $('avatarError').innerHTML = "Archivo no soportado"
            this.classList.add('is-invalid')
            break;
    }
}) */
