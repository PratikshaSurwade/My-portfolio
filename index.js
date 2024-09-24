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
gsap.registerPlugin(ScrollTrigger);

gsap.from(".leftBoxLineContainer",{
    opacity:0,
    duration:0.3,
    stagger:0.3,
    scrollTrigger:{
        trigger:".projectBox",
        scroller:"body",
        start:"top 50%",
        end:"top 10%",
        markers:true,
    }
})

// Projects .....


gsap.from(".differenctiator .differ",{
    width:0,
    opacity:0,
    delay:0.4,
    stagger:0.3
})

gsap.timeline({
    scrollTrigger: {
      trigger: ".projectBox",
      scroller: "body",
      start: "top 50%", // When to start the animation
      end: "top 10%", // Scroll trigger end point
      markers: true,     // Show markers to debug
      scrub: true,       // Smooth scrubbing for better control
    }
  })
  .from(".leftLine", {
    scale: 0,
    delay: 0.1,
  })
  .from(".leftRect", {
    width: 0,
    delay: 0.1,
  })

  .from(".leftCircle", {
    scale: 0,
    delay: 0.1,
  });
  
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

let navbarFlag = true;  // Use 'let' to toggle flag

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY > 0 && navbarFlag) {
        // Hide the nav items
        console.log(navbarFlag);
        gsap.to(".moveNavItems", {
            x: 40,
            opacity: 0,
            delay: 0.1,
        });
        gsap.to(".fa-plus", {
            duration: 0.5,
            rotation: 0,
        });
        gsap.to(".menuItem", {
            backgroundColor: "red",
            borderRadius: "50%",
        });
    } else {
        // Show the nav items when scrolling back to the top
        gsap.to(".moveNavItems", {
            x: 0,
            opacity: 1,
            delay: 0.1,
        });
        gsap.to(".fa-plus", {
            duration: 0.5,
            rotation: 225,
        });
        gsap.to(".menuItem", {
            backgroundColor: "antiquewhite",
            borderRadius: "0%",
        });
    }
});

function toggleFlag() {
    navbarFlag = !navbarFlag;  // Toggle the navbarFlag value
    console.log(navbarFlag);
}

// Menu toggle to expand/collapse the navbar
document.querySelector(".menuIcon").addEventListener("click", (e) => {
    e.preventDefault();  // Prevent default behavior (like scrolling to the top)
    console.log(navbarFlag)
    if (navbarFlag) {
        navbarFlag = !navbarFlag;
        console.log(navbarFlag);
        gsap.to(".moveNavItems", {
            x: 40,
            opacity: 0,
            delay: 0.1,
        });
        gsap.to(".fa-plus", {
            duration: 0.5,
            rotation: 0,
        });
        gsap.to(".menuItem", {
            backgroundColor: "red",
            borderRadius: "50%",
        });
    } else {
        navbarFlag = !navbarFlag;
        console.log(navbarFlag);
        gsap.to(".moveNavItems", {
            x: 0,
            opacity: 1,
            delay: 0.1,
        });
        gsap.to(".fa-plus", {
            duration: 0.5,
            rotation: 225,
        });
        gsap.to(".menuItem", {
            backgroundColor: "antiquewhite",
            borderRadius: "0%",
        });
    }
});


// Trying 3d effect/////////////

let tl1= gsap.timeline({
    scrollTrigger:{
        trigger:"#projects",
        scroller:"body",
        scrub:2,
        markers:"true"
    }
})

tl1.to(".circleContainer",{
    left:20,
    right:10
})