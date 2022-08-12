const questions = document.querySelectorAll('.questions .question-box');
questions.forEach((question) => {
	question.addEventListener('click', (e) => {
		e.currentTarget.classList.toggle('activa');

		const answer = question.querySelector('.answer');
		const alturaRealRespuesta = answer.scrollHeight;
        console.log(alturaRealRespuesta);
		
		if(!answer.style.maxHeight){
			// Si esta vacio el maxHeight entonces ponemos un valor.
			answer.style.maxHeight = alturaRealRespuesta + 'px';
		} else {
			answer.style.maxHeight = null;
		}

		// [Opcional] Reiniciamos las demas preguntas
		questions.forEach((elemento) => {
			// Solamente queremos ejecutar el codigo para las preguntas que no 
			// sean la pregunta a la que le dimos click.
			if(question !== elemento){
				elemento.classList.remove('activa');
				elemento.querySelector('.answer').style.maxHeight = null;
			}
		});


	});
});