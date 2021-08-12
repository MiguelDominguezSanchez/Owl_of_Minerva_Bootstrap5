let stars = document.getElementById('stars')
let stars1 = document.getElementById('stars1')
let stars2 = document.getElementById('stars2')
let stars3 = document.getElementById('stars3')
let moon = document.getElementById('moon')
let mountain_behind = document.getElementById('mountain_behind')
// let mountain_behind2 = document.getElementById('mountain_behind2')
let parthenon_promontory = document.getElementById('parthenon_promontory')
let mountain_front = document.getElementById('mountain_front')
let clouds = document.getElementById('clouds')
// let text = document.getElementById('text')
// let btn = document.getElementById('btn')
let bushes = document.getElementById('bushes')
let firtree1 = document.getElementById('firtree1')
let firtree2 = document.getElementById('firtree2')
let firtree3 = document.getElementById('firtree3')
let firtree4 = document.getElementById('firtree4')
let shrubs = document.getElementById('shrubs')
let owl = document.getElementById('owl')
let header = document.querySelector('header')

window.addEventListener('scroll', function () {
	let value = window.scrollY
	// let value2 = window.scrollX
	stars.style.left = value * 0.25 + 'px'
	stars1.style.right = value * 3.45 + 'px'
	stars2.style.bottom = value * 2.35 + 'px'
	stars3.style.top = value * 1.15 + 'px'
	moon.style.top = value * 1.05 + 'px'
	mountain_behind.style.top = value * 0.02 + 'px'
	// mountain_behind2.style.top = value * 0.01 + 'px'
	parthenon_promontory.style.top = value * 0.05 + 'px'
	mountain_front.style.top = value * 0.05 + 'px'
	bushes.style.top = value * 0 + 'px'
	firtree1.style.top = value * 0.2 + 'px'
	firtree2.style.top = value * 0.5 + 'px'
	firtree3.style.top = value * 1 + 'px'
	firtree4.style.top = value * 2 + 'px'
	shrubs.style.bottom = value * 1 + 'px'

	owl.style.top = value * -0.5 + 'px'

	// clouds.style.marginRight = value * 4 + 'px'
	// clouds.style.marginTop = value * 1.5 + 'px'
	clouds.style.left = value * 2 + 'px'
	// btn.style.marginTop = value * 1.5 + 'px'
	header.style.top = value * 0.5 + 'px'
})
