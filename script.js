gsap.to(".strip", {
	height: "100%",
	opacity: 1,
	duration: 1.5,
	delay: .5,
	ease: "expo.out",
	stagger: {
		ease: "none",
		amount: 1.5,
	}
})
gsap.from("h1, h2, h3, h4", {
	opacity: 0,
	duration: 1,
	delay: 1,
	stagger: {
		amount: 1.5,
	}
});

const h1 = document.querySelectorAll('h1')
const search = document.querySelector('.search')
const strip = document.querySelectorAll('.strip')
const btn = document.querySelector(".btn")

btn.addEventListener('click', ()=>{
    let res =  search.value.trim().replace(/\W/g, '');

    strip.forEach(ele=>{
        ele.style.height = '0'
        if(ele.classList.contains(`${res}`)){
            ele.style.height = '100%'
        } else{
            ele.style.height = '0'
        }
    })
    search.value = ''
})