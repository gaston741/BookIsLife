console.log('<--- Welcome :D  starting product creation form !! ---> ');

const qs = (element) => document.querySelector(element);
const qsa = (element) => document.querySelectorAll(element);
const $ = (element) => document.getElementById(element);

window.addEventListener('load' , () => {
    let productCreate = qs('#productCreate'),
        name = qs('#name'),
        price = qs('#price'),
        autorId = qs('#autorId'),
        publisherId = qs('#publisherId'),
        genreId = qs('#genreId'),
        languageId = qs('#languageId'),
        categoryId = qs('#categoryId'),
        description = qs('#description'),
        portada = qs('#portada'),
        errorName = qs('#errorName'),
        errorPrice = qs('#errorPrice'),
        errorAutorId = qs('#errorAutorId'),
        errorPublisherId = qs('#errorPublisherId'),
        errorGenreId = qs('#errorGenreId'),
        errorLanguageId = qs('#errorLanguageId'),
        errorCategoryId = qs('#errorCategoryId'),
        errorDescription = qs('#errorDescription'),
        errorPortada = qs('#errorPortada'),
        errorForm = qs('#errorForm'),
        allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i,
        errors;

    name.addEventListener('blur' , () => {
        switch (true) {
            case name.value.length === 0:
                name.classList.add('is-invalid');
                errorName.innerHTML = 'Debes ingresar un título';
                errors = true
                break;
            case name.value.length <= 5:
                name.classList.add('is-invalid');
                errorName.innerHTML = 'Deberá tener al menos 5 caracteres';
                errors = true
                break;
            default:
                name.classList.remove('is-invalid');
                name.classList.add('is-valid');
                errorName.innerHTML = "";
                errors = false
                break;
        }
    })

    price.addEventListener('blur' , () => {
        switch (true) {
            case price.value.length === 0:
                price.classList.add('is-invalid');
                errorPrice.innerHTML = 'Debes indicar el precio del libro';
                errors = true
                break;
            default:
                price.classList.remove('is-invalid');
                price.classList.add('is-valid');
                errorPrice.innerHTML = "";
                errors = false
                break;
        }
    })

    autorId.addEventListener('blur' , () => {
        switch (true) {
            case autorId.value.length == "":
                //alert('hasdoasndmopa')
                autorId.classList.add('is-invalid')
                errorAutorId.innerHTML = 'Debes indicar el nombre del Autor';
                errors = true
                break;
            case publisherId.value.length <= 2:
                publisherId.classList.add('is-invalid');
                errorAutorId.innerHTML = 'Deberá tener al menos 2 caracteres';
                errors = true
                //break;
            default:
                autorId.classList.remove('is-invalid');
                autorId.classList.add('is-valid');
                errorAutorId.innerHTML = "";
                errors = false
                break;
        }
    })

    publisherId.addEventListener('blur' , () => {
        switch (true) {
            case publisherId.value.length == "":
                publisherId.classList.add('is-invalid');
                errorPublisherId.innerHTML = 'Debes indicar la Editorial';
                errors = true
                break;
            case publisherId.value.length <= 3:
                publisherId.classList.add('is-invalid');
                errorPublisherId.innerHTML = 'Deberá tener al menos 2 caracteres';
                errors = true
                //break;
            default:
                publisherId.classList.remove('is-invalid');
                publisherId.classList.add('is-valid');
                errorPublisherId.innerHTML = "";
                errors = false
                break;
        }
    })

    genreId.addEventListener('blur' , () => {
        switch (true) {
            case genreId.value.length == "":
                genreId.classList.add('is-invalid');
                errorGenreId.innerHTML = 'Debes Seleccionar un Género';
                errors = true
                break;
            default:
                genreId.classList.remove('is-invalid');
                genreId.classList.add('is-valid');
                errorGenreId.innerHTML = "";
                errors = false
                break;
        }
    })

    languageId.addEventListener('blur' , () => {
        switch (true) {
            case languageId.value.length == "":
                languageId.classList.add('is-invalid');
                errorLanguageId.innerHTML = 'Debes Seleccionar un Idioma';
                errors = true
                break;
            default:
                languageId.classList.remove('is-invalid');
                languageId.classList.add('is-valid');
                errorLanguageId.innerHTML = "";
                errors = false
                break;
        }
    })

    categoryId.addEventListener('blur' , () => {
        switch (true) {
            case categoryId.value.length == "":
                categoryId.classList.add('is-invalid');
                errorCategoryId.innerHTML = 'Debes indicar la Categoría del producto';
                errors = true
                break;
            default:
                categoryId.classList.remove('is-invalid');
                categoryId.classList.add('is-valid');
                errorCategoryId.innerHTML = "";
                errors = false
                break;
        }
    })

    description.addEventListener('blur' , () => {
        switch (true) {
            case description.value.length === 0:
                description.classList.add('is-invalid');
                errorDescription.innerHTML = 'Debe ingresar una sinopsis';
                errors = true
                break;
            case description.value.length <= 20:
                description.classList.add('is-invalid');
                errorDescription.innerHTML = 'Deberá tener al menos 20 caracteres';
                errors = true
                break;
            default:
                description.classList.remove('is-invalid');
                description.classList.add('is-valid');
                errorDescription.innerHTML = "";
                errors = false
                break;
        }
    })

    portada.addEventListener('change' , () => {
        if (!allowedExtensions.exec(portada.value)) {
            portada.value = "";
            portada.classList.add('is-invalid')
            errorPortada.innerHTML = 'Archivo no soportado'
            errors = true
        }else{
            portada.classList.remove('is-invalid');
            portada.classList.add('is-valid');
            errorPortada.innerHTML = "";
            errors = false
        }
    })

    productCreate.addEventListener('submit', (e) =>{
        let errors = true;
        e.preventDefault()
        let elementosForm = productCreate.elements;
        
        for (let i = 0; i < elementosForm.length-2; i++) {
            if(elementosForm[i].value === "" || 
                elementosForm[i].classList.contains('is-invalid')/*  && elementosForm[i] !==   */ //<< para negar informacion no importante 
            ){
                elementosForm[i].classList.add('is-invalid');
                errorForm.innerHTML = "Revisa los campos señalados";
                console.log("ok, let's check the marked fields !! :) ");
                errors = true;
            }
            else{
                errors = false;
            }
        }
        if(errors == false){
            console.log("Todo Perfecto !!");
            errorForm.innerHTML = '';
            /* alert("Carga realizada correctamente"); */
            productCreate.submit();
        }
    })
})