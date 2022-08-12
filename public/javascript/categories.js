const categories = document.querySelectorAll('#categories .category') //capturo categorias
const questionsContainer = document.querySelectorAll('.questions-box') //capturo el div contenedor de preguntas
let categoryActive = null; // guardamos la categoria activaa

categories.forEach((category)=>{ // por cada categoria que tenga aplico un evento on click y ejecuto una funcion por cada una
    category.addEventListener( 'click',(e)=>{
        categories.forEach((elemento)=>{
            elemento.classList.remove('activa')//remuevo la clase activa del elemento anteriormente clickeado
        });
       /*  console.log(e.currentTarget); */ // me devuelve cada categoria
       e.currentTarget.classList.toggle('activa')
       categoryActive = category.dataset.category;//rescato el valor de data
       /* console.log(categoryActive); */


       /* activamos el contenedor de preguntas correspondiente*/
       /* A forEach loop that is iterating over the questionsContainer variable. */
       questionsContainer.forEach((contenedor) => {

        /* Checking if the data-category of the questionsContainer is equal to the categoryActive. If
        it is, it adds the class activo to the questionsContainer. */
        if(contenedor.dataset.category == categoryActive){
            contenedor.classList.add('activo')
            console.log(contenedor);

        }else{
            contenedor.classList.remove('activo')
        }

       })
    })

})
