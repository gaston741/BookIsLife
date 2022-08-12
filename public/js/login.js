console.log('login.js success!');

const $ = (element) => document.getElementById(element)

const regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;


$('email').addEventListener('blur', function() {

    switch (true) {
        case !this.value.trim():
            this.classList.add('is-invalid')
            $('errorEmail').innerHTML = "Tenes que Ingresar tu Email"
            break;
        case !regExEmail.test(this.value.trim()) :
            this.classList.add('is-invalid')
            $('errorEmail').innerHTML = "El Email tiene un formato incorrecto"
            break;
        default:
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('errorEmail').innerHTML = null
            break;
    }
})

$('password').addEventListener('blur', function() {
    
    switch (true) {
        case !this.value.trim():
            this.classList.add('is-invalid')
            $('errorPassword').innerHTML = "Tienes que ingresar tu Contraseña"
            break;
        default:
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('errorPassword').innerHTML = null;
            break;
    }
})


$('form-login').addEventListener('submit', (e) => {
    e.preventDefault()

    let elements = e.target.elements
    let error = false

    for (let i = 0; i < elements.length - 2; i++) {
        if (!elements[i].value.trim()) {
             elements[i].classList.add('is-invalid')
             error = true
             $('errorPassword'.innerHTML = "Todo es Obligatorio")
        }
    }
    for (let i = 0; i < elements.length - 2; i++) {
        if (!elements[i].contains) {
             error = true
        }
    }

    !error && e.target.submit()
})





