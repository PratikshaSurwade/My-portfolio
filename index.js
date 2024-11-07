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
window.addEventListener("load", () => {
    const circle = document.querySelector("#circleContainer");
    const lines = [document.querySelector("#line1"), document.querySelector("#line2"), document.querySelector("#line3")];
  
    // First, animate the circle
    setTimeout(() => {
      circle.style.opacity = 1;
    }, 500); // Delay for visual appeal
  
    // Next, animate the text lines in sequence
    setTimeout(() => {
      lines[0].classList.add("show");
    }, 2500);
  
    setTimeout(() => {
      lines[1].classList.add("show");
    }, 3500);
  
    setTimeout(() => {
      lines[2].classList.add("show");
    }, 4500);
  
    // Finally, move the circle to the corner
    setTimeout(() => {
      circle.classList.add("movedToCorner");
    }, 6000);
  });
  

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




// Trying 3d effect/////////////

let tl1= gsap.timeline({
    scrollTrigger:{
        trigger:".Projects",
        scroller:"body",
        scrub:5,
        markers:"true"
    }
})

tl1.to(".circleContainer",{
    left:20,
    right:10
})

// MAGNETIC CURSOR FOR ICONS IN PAGE 4

document.querySelectorAll('.magneticIconsContainer').forEach(container => {
    const icon = container.querySelector('.magIcon');
    
    container.addEventListener('mousemove', (e) => {
      // Get container and mouse positions
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Adjust icon position
      icon.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    
    container.addEventListener('mouseleave', () => {
      // Reset icon position
      icon.style.transform = 'translate(0, 0)';
    });
  });
  

  document.addEventListener("mousemove", (e) => {
    const cursorRing = document.querySelector(".cursor-ring");
    cursorRing.style.left = `${e.clientX}px`;
    cursorRing.style.top = `${e.clientY}px`;
});

document.addEventListener("mousemove", (e) => {
    const spotLightRing = document.querySelector(".spoltlight-ring");
    spotLightRing.style.left = `${e.clientX}px`;
    spotLightRing.style.top = `${e.clientY}px`;
});

