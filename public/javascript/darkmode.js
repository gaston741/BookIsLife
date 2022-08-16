console.log('exito')
const btnswitch =document.querySelector('#switch')

btnswitch.addEventListener('click', () => {
    
    let bodies = document.querySelectorAll('body')
    for(let body of bodies) {
      body.classList.toggle('dark')
    }
 
    btnswitch.classList.toggle('active')


})
