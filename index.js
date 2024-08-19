document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.word');
    console.log(elements);
    window.addEventListener('scroll', function() {
        elements.forEach((element, index) => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight) { 
                element.style.setProperty('--delay', `${index * 0.1}s`);
                element.classList.add('visible');
            }
        });
    });
});

// var crsr = document.querySelector("#cursor");

// document.addEventListener("mousemove",function(details){
//     crsr.style.left = details.x+"px";
//     crsr.style.top = details.y+"px";
// })

// document.addEventListener("",function(details){
//     crsr.style.left = details.x+"px";
//     crsr.style.top = details.y+"px";
// })

// Navbar Animation


gsap.from("h1",{
    y:20,
    opacity:0,
    duration:0.3,
    delay:0.1,
})

gsap.from(".navTabs .btn",{
    y:20,
    opacity:0,
    delay:0.4,
    stagger:0.3
})

var tl= gsap.timeline();

tl.from("dividerLine",{
    y:20,
    opacity:0,
    duration:0.3,
    delay:0.1,
})

// var loader = document.querySelector(".loader")

// setTimeout(function () {
//     loader.style.top = "-100%"
// }, 4000)
