// let height = document.querySelector(`window`).height
// let width = document.querySelector(`window`).width
let width = window.innerWidth
let height = window.innerHeight
let main = document.querySelector(`body`)
main.style.backgroundColor = `black`

let audio = document.querySelector(`.audio-source-cont`)
let hiddenCalc = document.querySelector(`.hidden-div-calculate`)
function playAudio(){
	audio.play()
}


let hiddenDiv = document.querySelector(`.hidden-div-calculate`)
let testo = document.querySelector(`.test`)
let desc = document.querySelectorAll(`.description`)
let calc = document.querySelector(`.calcul`)
let toggled = true
testo.addEventListener(`click`, testFunc)
function testFunc() {
	if (!toggled) {
		toggled = true
		hiddenDiv.style.width =`20rem`
		hiddenDiv.style.backgroundColor =`black`
		hiddenDiv.style.color =`black`
		desc.forEach(desc => desc.style.color = `black`)
		// calc.style.color = `rgba(167, 252, 255, 0.692)`
		// calc.style.transform = `scale(1.2, 1.2)`
		calc.style.color = `rgba(167, 252, 255, 0.486)`
		calc.style.transform = `scale(1, 1)`
	} else if (toggled) {
		toggled = false
		hiddenDiv.style.width =`0`
		hiddenDiv.style.backgroundColor =`#527b8b79`
		hiddenDiv.style.color =`rgba(167, 252, 255, 0.486)`
		desc.forEach(desc => desc.style.color = `rgba(227, 254, 255, 0.562)`)
		// calc.style.color = `rgba(167, 252, 255, 0.486)`
		// calc.style.transform = `scale(1, 1)`
		calc.style.color = `rgba(167, 252, 255, 0.692)`
		calc.style.transform = `scale(1.2, 1.2)`
	}
}



function random() {
	return (Math.random() * 30)
}