console.log('scripts success!!');

const qs = (element) => document.querySelector(element);
const qsa = (element) => document.querySelectorAll(element);
const $ = (element) => document.getElementById(element);

window.addEventListener('load' , () => {
    let formProductEdit = qs('form-ProductEdit'),
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
        errorDescription = qs('#errorDescription')
        errorPortada = qs('#errorPortada')
        regExExtensions = /(.jpg|.jpeg|.png|.gif)$/i;

    name.addEventListener('blur' , () => {
        switch (true) {
            case name.value.length === 0:
                name.classList.add('is-invalid');
                errorName.innerHTML = 'Debes ingresar un título';
                errores = true
                break;
            case name.value.length <= 5:
                name.classList.add('is-invalid');
                errorName.innerHTML = 'Deberá tener al menos 5 caracteres';
                errores = true
            default:
                name.classList.remove('is-invalid');
                name.classList.add('is.valid');
                errorName.innerHTML = "";
                errores = false
                break;
        }
    })
    price.addEventListener('blur' , () => {
        switch (true) {
            case price.value.length === 0:
                price.classList.add('is-invalid');
                errorPrice.innerHTML = 'Debes indicar el precio del libro';
                errores = true
                break;
            default:
                price.classList.remove('is-invalid');
                price.classList.add('is.valid');
                errorPrice.innerHTML = "";
                errores = false
                break;
        }
    })
    autorId.addEventListener('blur' , () => {
        switch (true) {
            case autorId.value.length == "":
                //alert('hasdoasndmopa')
                autorId.classList.add('is-invalid')
                errorAutorId.innerHTML = 'Debes indicar el nombre del Autor';
                errores = true
                break;
            default:
                autorId.classList.remove('is-invalid');
                autorId.classList.add('is.valid');
                errorAutorId.innerHTML = "";
                errores = false
                break;
        }
    })
    publisherId.addEventListener('blur' , () => {
        switch (true) {
            case publisherId.value.length == "":
                publisherId.classList.add('is-invalid');
                errorPublisherId.innerHTML = 'Debes indicar la Editorial';
                errores = true
                break;
            case publisherId.value.length <= 2:
                publisherId.classList.add('is-invalid');
                errorPublisherId.innerHTML = 'Deberá tener al menos 2 caracteres';
                errores = true
            default:
                publisherId.classList.remove('is-invalid');
                publisherId.classList.add('is.valid');
                errorPublisherId.innerHTML = "";
                errores = false
                break;
        }
    })
    genreId.addEventListener('blur' , () => {
        switch (true) {
            case genreId.value.length == "":
                genreId.classList.add('is-invalid');
                errorGenreId.innerHTML = 'Debes indicar el Género';
                errores = true
                break;
            default:
                genreId.classList.remove('is-invalid');
                genreId.classList.add('is.valid');
                errorGenreId.innerHTML = "";
                errores = false
                break;
        }
    })
    languageId.addEventListener('blur' , () => {
        switch (true) {
            case languageId.value.length == "":
                languageId.classList.add('is-invalid');
                errorLanguageId.innerHTML = 'Debes ingresar un título';
                errores = true
                break;
            case languageId.value.length <= 5:
                languageId.classList.add('is-invalid');
                errorLanguageId.innerHTML = 'Deberá tener al menos 5 caracteres';
                errores = true
            default:
                languageId.classList.remove('is-invalid');
                languageId.classList.add('is.valid');
                errorLanguageId.innerHTML = "";
                errores = false
                break;
        }
    })
    categoryId.addEventListener('blur' , () => {
        switch (true) {
            case categoryId.value.length == "":
                categoryId.classList.add('is-invalid');
                errorCategoryId.innerHTML = 'Debes indicar la Categoría del producto';
                errores = true
                break;
            default:
                categoryId.classList.remove('is-invalid');
                categoryId.classList.add('is.valid');
                errorCategoryId.innerHTML = "";
                errores = false
                break;
        }
    })
    description.addEventListener('blur' , () => {
        switch (true) {
            case description.value.length === 0:
                description.classList.add('is-invalid');
                errorDescription.innerHTML = 'Debe ingresar una sinopsis';
                errores = true
                break;
            case description.value.length <= 20:
                description.classList.add('is-invalid');
                errorDescription.innerHTML = 'Deberá tener al menos 20 caracteres';
                errores = true
            default:
                description.classList.remove('is-invalid');
                description.classList.add('is.valid');
                errorDescription.innerHTML = "";
                errores = false
                break;
        }
    })
    portada.addEventListener('blur' , () => {
        if (!allowExtensions.exec(portada.value)) {
            portada.value = "";
            portada.classList.add('is-invalid')
            errorPortada.innerHTML = 'Archivo no soportado'
        }else{
            portada.classList.remove('is-invalid');
            portada.classList.add('is-valid');
            errorPortada.innerHTML = "";
        }
    })
    formProductEdit.addEventListener('submit', (e) =>{
        let errores = true;
        e.preventDefault()
        let elementosForm = formProductEdit.elements;
        
        for (let i = 0; i < elementosForm.length-1; i++) {
            if(elementosForm[i].value === "" || elementosForm[i].classList.contains('is-invalid')/*  && elementosForm[i] !==   */ //<< para negar informacion no importante 
            ){
                elementosForm[i].classList.add('is-invalid');
                errorForm.innerHTML = "Revisa los campos señalados";
                errores = true;
            }else{
                errores = false;
            }
        }
        if(errores == false){
            console.log("Todo Perfecto !!");
            errorForm.innerHTML = '';
            alert("Carga realizada correctamente");
            formProductEdit.submit();
        }
    })
})