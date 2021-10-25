let interactiveText = ['DESENVOLVEDOR FULLSTACK', 'SEO E MARKTING DIGITAL', 'AUTOMAÇÃO']
let stringSelect = 0
let stringLetter = 0
let progress = true


function modifyText() {
	element = document.getElementById('interactive-text')
	if(element.innerHTML < interactiveText[stringSelect] && progress){
		element.innerHTML += interactiveText[stringSelect][stringLetter]
		stringLetter++
	} else {
		stringLetter = 0
		stringSelect = ++stringSelect % interactiveText.length
		element.innerHTML = ''
	}
}