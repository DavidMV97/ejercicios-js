
const update = () => {
	const text = document.querySelector('#text');
	const view = document.querySelector('#view');
	view.srcdoc = text.value;
}

const textArea = document.querySelector('.text'); 

textArea.addEventListener( 'keyup' , () => {
	update(); 
})