console.log('register.js seccess');

const $ = (element) => document.getElementById(element)

const regExLetter = /^[A-Z]+$/i;
const regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
const regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
const  regExExtensions = /(.jpg|.jpeg|.png|.gif)$/i;

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

$('email').addEventListener('blur', function() {
    
    switch (true) {
        case !this.value.trim():
            this.classList.add('is-invalid')
            $('emailError').innerHTML = "Tienes que ingresar tu Email"
            break;
        case !regExEmail.test(this.value.trim()) :
                $('emailError').innerHTML = "El email tiene un formato inválido"
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

$('password').addEventListener('blur', function() {
    
    switch (true) {
        case !this.value.trim():
            $('passwordError').innerHTML = "Tienes que ingresar tu Contraseña"
            this.classList.add('is-invalid')
            break;
        case !regExPass.test(this.value.trim()) :
                $('passwordError').innerHTML = "La Contraseña tiene que tener entre 6 y 12 caracteres, un Número, una Mayuscula y un signo cualquiera"
                this.classList.add('is-invalid')
                break
        default:
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('passwordError').innerHTML = null;

            break;
    }
})

$('password2').addEventListener('blur', function() {
    
    switch (true) {
        case !this.value.trim():
            $('password2Error').innerHTML = "Tienes que confirmar tu Contraseña"
            this.classList.add('is-invalid')
            break;
        case this.value.trim() !== $('password').value.trim():
                $('password2Error').innerHTML = "Las Contraseñas no coinciden"
                this.classList.add('is-invalid')
                break
        default:
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('password2Error').innerHTML = null;

            break;
    }
})

$('image').addEventListener('change', function(){
    if(!regExExtensions.exec(image.value)){
        image.value = '';
        image.classList.add('is-invalid')
        $('errorImage').innerHTML = 'Los archivos soportados son jpg, jpeg, png, gif '
    }else{
        image.classList.remove('is-invalid')
        image.classList.add('is-valid')
        $('errorImage').innerHTML = ''
    }

})


window.addEventListener('load' , () => {

$('form-register').addEventListener('submit', function(e) {
    
    e.preventDefault();
    let elements = this.elements;
    console.log(elements);

    for (let i = 0; i < elements.length - 2; i++) {
        console.log(elements[i]);
        if (elements[i].value === "" || elements[i].classList.contains('is-invalid') ) {
            elements[i].classList.add('is-invalid');
            errorForm.innerHTML = " Ops! Revisa los campos señalados";   
                 
        } else{
            
            $('form-register').submit();
        } 

    }
        
        

    })

})

