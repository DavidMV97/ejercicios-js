const reloj = document.querySelector('.reloj'); 

const getHora = () => {
	const fecha = new Date(); 

	const tiempo = {
		hora : fecha.getHours(),
		minuto: fecha.getMinutes() ,
		segundo: fecha.getMinutes()
	}

	reloj.innerHTML = `${tiempo.hora} : ${tiempo.minuto} : ${tiempo.segundo}`  ; 
	console.log(fecha); 
};

setInterval(getHora , 300);  