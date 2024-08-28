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

// Cursor animation

var crsr = document.querySelector("#cursor");

document.addEventListener("mousemove",function(details){
    crsr.style.left = details.x+"px";
    crsr.style.top = details.y+"px";
})

document.addEventListener("",function(details){
    crsr.style.left = details.x+"px";
    crsr.style.top = details.y+"px";
})


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

//Heading Name Animation

gsap.utils.toArray(".titleName").forEach((heading) => {
    gsap.from(heading.querySelectorAll(".animateTitleWords"), {
        y: 20,
        opacity: 0,
        stagger: 0.5,
        // duration: 2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: heading,
            scroller: "body",
            markers:true,
            start: "top 80%",  // Animation starts when the element hits 80% from the top of the viewport
            end: "top 50%",    // Animation ends when the element is at 50% from the top of the viewport
            toggleActions: "play none none none"  // The animation will only play once when the element comes into view
        }
    });
});
 
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



// Select all h1 elements with the class "animate-text"
const introTexts = document.querySelectorAll('.animate-text');

introTexts.forEach((introText) => {
    const text = introText.textContent;
    introText.innerHTML = '';

    // Loop through each letter and wrap it in a span with a delay
    text.split('').forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.classList.add('letter');

        // Apply animation on hover with delay based on index
        span.addEventListener('mouseenter', () => {
            span.classList.add('animate__animated', 'animate__rubberBand');
            span.addEventListener('animationend', () => {
                span.classList.remove('animate__animated', 'animate__rubberBand');
            }, { once: true });
        });

        introText.appendChild(span);
    });
});

