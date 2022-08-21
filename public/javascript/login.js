console.log('login.js success!');
const $ = (element) =>document.getElementById(element) 

const regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;


$('email').addEventListener('blur', function() {

    switch (true) {
        case !this.value.trim():
            this.classList.add('is-invalid') //Estos son valores de Boostrap 
            $('errorEmail').innerHTML = "Tenes que Ingresar tu Email"
            break;
        case !regExEmail.test(this.value.trim()) :
            this.classList.add('is-invalid') //Estos son valores de Boostrap
            $('errorEmail').innerHTML = "El Email tiene un formato incorrecto"
            break;
        default:
            this.classList.remove('is-invalid') //Estos son valores de Boostrap
            this.classList.add('is-valid') //Estos son valores de Boostrap
            $('errorEmail').innerHTML = null
            break;
    }
})

$('password').addEventListener('blur', function() {
    
    switch (true) {
        case !this.value.trim():
            this.classList.add('is-invalid') //Estos son valores de Boostrap
            $('errorPassword').innerHTML = "Tienes que ingresar tu Contraseña"
            break;
        default:
            this.classList.remove('is-invalid') //Estos son valores de Boostrap
            this.classList.add('is-valid') //Estos son valores de Boostrap
            $('errorPassword').innerHTML = null;
            break;
    }
})


window.addEventListener('load' , () => {

    $('form-login').addEventListener('submit', function(e) {
    
        e.preventDefault();
        let elements = this.elements;
        console.log(elements);
    
        for (let i = 0; i < elements.length - 2; i++) {
            console.log(elements[i]);
            if (elements[i].value === "" || elements[i].classList.contains('is-invalid') ) {
                elements[i].classList.add('is-invalid');
                errorForm.innerHTML = " Ops! Revisa los campos señalados";   
                     
            } else{
                
                $('form-login').submit();
            } 
    
        }
            
            
    
        })


    })
