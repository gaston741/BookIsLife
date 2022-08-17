console.log('dark mode prueba')
const btnswitch =document.querySelector('#switch')// capturo el boton
const body = document.querySelector('body')// capturo el body

btnswitch.addEventListener('click', () => { // agrego un evento de escucha que

    body.classList.toggle('dark')// casi que body no tenga la clase dark, al hacer click en el btn obtenga esa clase
 
    btnswitch.classList.toggle('active')// y que al btn se le agregue la clase active


    /* Guardamos preferencia */

    if(body.classList.contains('dark')){ // si el cuerpo contiene la clase dark
      localStorage.setItem('dark-mode','true')//setamos clave dark-mode en true
    }else {
      localStorage.setItem('dark-mode','false')// sino seteamos en false
    }


})

 /*  Accedemos al modo que prefiere */
if(localStorage.getItem('dark-mode') === 'true'){ // si dark-mode estaba en true antes de ser recargada la pag
  body.classList.add('dark') // activamos las clases correspondientes
  btnswitch.classList.add('active')
 }else{
  body.classList.remove('dark') // sino las removemos
  btnswitch.classList.remove('active')
 }