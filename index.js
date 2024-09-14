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


//Heading Name Animation

gsap.utils.toArray(".titleName").forEach((heading) => {
    gsap.from(heading.querySelectorAll(".animateTitleWords"), {
        y: 100,
       
        opacity: 0,
        stagger: 0.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: heading,
            scroller: "body",
            start: "top 70%",  // Animation starts when the element hits 80% from the top of the viewport
            end: "top 50%",    // Animation ends when the element is at 50% from the top of the viewport
            toggleActions: "play none none none"  // The animation will only play once when the element comes into view
        }
    });
});
 


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

        if (letter === " ") {
            // If the character is a space, create a span with the 'space' class
            span.classList.add("space");
        } else {
            // For letters, use the 'letter' class
            span.classList.add("letter");
        }
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

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".navTabs a");

    links.forEach(link => {
        link.addEventListener("mouseenter", function(e) {
            const dot = this.querySelector("::after");
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            gsap.to(dot, {
                x: x - rect.width / 2,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        link.addEventListener("mouseleave", function() {
            const dot = this.querySelector("::after");
            gsap.to(dot, {
                x: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
});

// Page 2 Design

const navBar = document.querySelector(".navBarDesign");
const navItem = document.querySelectorAll(".navItems");

gsap.to("navBarDesign",{
    width: "2rem",
    duration:0.3,
    delay:0.1,
})

gsap.from(".navBarDesign .moveNavItems",{
    x:20,
    opacity:0,
    delay:0.4,
    stagger:-0.3
})

// Collapse the navbar when scrolling down
window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY > 0) { // Adjust scroll threshold
        // Hide the nav items
        gsap.to(".moveNavItems", {
            x: 40,
            opacity: 0,
            delay: 0.1,

            onComplete: () => {
                document.querySelector(".navBarDesign").classList.add("collapsed");
            }
        });
        gsap.to(".fa-plus", {
            duration: 0.5,
            rotation: 0,
        })
        gsap.to(".menuItem", {
            backgroundColor: "red",
            borderRadius: "50%",
        })
    } else {
        // Show the nav items when scrolling back to the top
        // document.querySelector(".navBarDesign").classList.remove("collapsed");
        gsap.to(".moveNavItems", {
            x: 0,
            opacity: 1,
            delay: 0.1,
        });
        gsap.to(".fa-plus", {
            duration: 0.5,
            rotation: 225,
        })
        gsap.to(".menuItem", {
            backgroundColor: "antiquewhite",
            borderRadius: "0%",
        })
    }
});

// Menu toggle to expand/collapse the navbar
// document.querySelector(".menuIcon").addEventListener("click", () => {
//     const navBar = document.querySelector(".navBarDesign");
//     if (navBar.classList.contains("collapsed")) {
//         navBar.classList.remove("collapsed");
//         gsap.from(".navItems", {
//             x: 20,
//             opacity: 1,
//             duration: 0.5,
//             stagger: 0.2
//         });
//     } else {
//         gsap.to(".navItems", {
//             x: 20,
//             opacity: 0,
//             duration: 0.3,
//             onComplete: () => {
//                 navBar.classList.add("collapsed");
//             }
//         });
//     }
// });