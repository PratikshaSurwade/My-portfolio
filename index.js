// State Initializing 
let navOpen = false;

// Function to handle the loader circle animation and position change
function animateLoaderCircle() {
    const loaderCircle = document.querySelector(".loaderCircle");

    // After 3 seconds when the circle is fully drawn, start the next transitions
    setTimeout(function () {
        loaderCircle.style.top = "27.0%";
    }, 3000); // Wait for the circle to fully draw
}

// Function to handle the animation of the loader (opacity changes, etc.)
function animateLoader() {
    const tl = gsap.timeline();

    tl.to(".loader", {
        opacity: 1,
        duration: 6,
        onComplete: () => console.log("Loader animation complete")
    })
        .to(".circleContainer", {
            opacity: 1,
            visibility: "visible",
            duration: 1,
            onComplete: () => console.log("CircleContainer visible")
        }, "-=3")
        .to(".loader", {
            opacity: 0,
            duration: 1,
            onComplete: () => {
                console.log("Loader hidden");
                document.querySelector(".loader").style.display = "none";
            }
        }, "-=1")
        .from("nav", {
            y: -100,
            opacity: 0,
            duration: 1,
            onComplete: () => console.log("Nav visible")
        })
        .from(".hero h1", {
            y: -100,
            opacity: 0,
            duration: 0.8,
            onComplete: () => console.log("Hero h1 visible")
        }, "-=0.4")
        .from(".hero h2", {
            y: -100,
            opacity: 0,
            duration: 0.8,
            onComplete: () => console.log("Hero h2 visible")
        }, "-=0.3")
        .from(".hero p", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            onComplete: () => console.log("Hero h3 visible")
        }, "-=0.2");

    console.log("Animation sequence initialized.");
}

// Function to move the cursor ring based on mouse movement
function followMouseCursorRing() {
    document.addEventListener("mousemove", (e) => {
        const cursorRing = document.querySelector(".cursor-ring");
        cursorRing.style.left = `${e.clientX}px`;
        cursorRing.style.top = `${e.clientY}px`;
    });
}

// Function to move the spotlight ring based on mouse movement
function followMouseSpotlightRing() {
    document.addEventListener("mousemove", (e) => {
        const spotLightRing = document.querySelector(".spotlight-ring");
        spotLightRing.style.left = `${e.clientX}px`;
        spotLightRing.style.top = `${e.clientY}px`;
    });
}

function buttonhoverEffect() {
    const h4Elements = document.querySelectorAll(".buttonEffect");
    const spotlightRing = document.querySelector(".spotlight-ring");

    h4Elements.forEach(h4 => {
        h4.addEventListener("mouseenter", (event) => {
            // Get the position and dimensions of the h4
            const rect = h4.getBoundingClientRect();

            // Adjust spotlight-ring's size and position
            spotlightRing.style.width = "3rem";
            spotlightRing.style.height = "3rem";
            spotlightRing.style.backgroundColor = "transparent";
            spotlightRing.style.border = "2px solid #ff8c00";
            spotlightRing.style.left = `${rect.left + rect.width / 2}px`;
            spotlightRing.style.top = `${rect.top + rect.height / 2}px`;

            // Make spotlight-ring visible by adjusting z-index
            spotlightRing.style.zIndex = "34";
        });

        h4.addEventListener("mouseleave", () => {
            spotlightRing.style.width = "1rem";
            spotlightRing.style.height = "1rem";
            spotlightRing.style.backgroundColor = "#ff8c00"; // Reset to dot color
            spotlightRing.style.border = "none";
            spotlightRing.style.zIndex = "3";
        });
    });
}
// Function to create grid items dynamically based on the viewport size
function createGridItems() {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = ''; // Clear any existing grid items

    // Define item size and gap
    const itemSize = 10; // in vh (10vh height and width for square items)
    const gap = 1; // in px

    // Calculate number of columns and rows needed to fill the viewport
    const columns = Math.ceil(window.innerWidth / (window.innerHeight * (itemSize / 100)));
    const rows = Math.ceil(100 / itemSize);

    // Set the CSS grid template dynamically
    gridContainer.style.gridTemplateColumns = `repeat(${columns}, ${itemSize}vh)`;

    // Create and append the required number of grid items
    for (let i = 0; i < columns * rows; i++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridContainer.appendChild(gridItem);
    }
}

function navToggle() {
    (navOpen===false)?
        document.querySelector(".NavMobItems").style.right="-100%" :document.querySelector(".NavMobItems").style.right="0"
    navOpen = !navOpen;
    console.log(navOpen)
}

// Initialize functions on page load
document.addEventListener("DOMContentLoaded", function () {

    animateLoaderCircle(); // Start loader circle position change
    animateLoader(); // Start loader animation
    followMouseCursorRing(); // Activate cursor ring animation
    followMouseSpotlightRing(); // Activate spotlight ring animation
    buttonhoverEffect();
    createGridItems(); // Create grid items
    navToggle();// Navbar Open Close

    // Re-create grid items on resize for responsiveness
    window.addEventListener('resize', createGridItems);
});


gsap.utils.toArray(".titleName").forEach((heading) => {
    gsap.from(heading.querySelectorAll(".animateTitleWords"), {
        y: 100, // Higher value to make it start from below the border
        opacity: 0,
        stagger: 0.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: heading,
            start: "center center", // Trigger when `.titleName` reaches the center of the viewport
            end: "bottom center",
            toggleActions: "play none none none"
        }
    });
});

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
