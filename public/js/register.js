console.log('register.js seccess');

const $ = (element) => document.getElementById(element)

const regExletter = /^[A-Z]+$/i;

$('name').addEventListener('blur', function() {
    
    switch (true) {
        case !this.value.trim():
            $('nombreError').innerHTML = "Tienes que ingresar tu nombre"
            this.classList.add('is-invalid')
            break;
        case !regExletter.test(this.value.trim()) :
                $('nombreError').innerHTML = "Tiene que poner solo letras"
                this.classList.add('is-invalid')
                break
        case this.value.trim().length < 2 || this.value.trim().length > 255 : 
            $('nombreError').innerHTML = "Tu nombre debe tener como minimo 2 caracteres"
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
        case !regExletter.test(this.value.trim()) :
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

$('email').addEventListener('blur', function() {
    
    switch (true) {
        case !this.value.trim():
            $('emailError').innerHTML = "Tienes que ingresar tu Email"
            this.classList.add('is-invalid')
            break;
        case !regExletter.test(this.value.trim()) :
                $('emailError').innerHTML = "Tiene que poner solo letras"
                this.classList.add('is-invalid')
                break
        case this.value.trim().length < 2 || this.value.trim().length > 255 : 
            $('emailError').innerHTML = "Tu email debe tener como minimo 2 caracteres"
            this.classList.add('is-invalid')
            break
        default:
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('emailError').innerHTML = null;

            break;
    }
})