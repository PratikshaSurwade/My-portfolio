// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
    duration: 3,
});

// State Initializing 
// Function to handle the loader circle animation and position change
function animateLoaderCircle() {
    const loaderCircle = document.querySelector(".loaderCircle");

    // After 3 seconds when the circle is fully drawn, start the next transitions
    setTimeout(function () {
        loaderCircle.style.top = "15%";
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
    let navOpen = false;

    (navOpen === false) ?
        document.querySelector(".NavMobItems").style.right = "-100%" : document.querySelector(".NavMobItems").style.right = "0"
    navOpen = !navOpen;
    console.log(navOpen)
}

// Initialize functions on page load
document.addEventListener("DOMContentLoaded", function () {
    // animateLoaderCircle(); // Start loader circle position change
    // animateLoader(); // Start loader animation
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

// Select all project boxes
const projectBoxes = document.querySelectorAll(".projectBox");

projectBoxes.forEach((box) => {
    // GSAP timeline for animations
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: box,            // Trigger for the current box
            scroller: "body",        // Default scroller
            start: "top 45%",        // Adjust based on when you want the animation to start
            end: "top 20%",          // When the animation ends
            scrub: 1,                // Smooth animation on scroll
            // markers: true,           // Debug markers (uncomment if needed)
        }
    });

    // Left box animations
    tl
        .from(box.querySelector(".leftLine"), { scale: 0, delay: 0.1 })
        .from(box.querySelector(".leftRect"), { width: 0, delay: 0.1 })
        .from(box.querySelector(".leftCircle"), { scale: 0, delay: 0.1 })
        .from(box.querySelector(".leftBoxText h4"), { opacity: 0, x: -50, ease: "power2.out" })
        .from(box.querySelector(".leftBoxText p"), { opacity: 0, x: -50, stagger: 0.2, ease: "power2.out" })
        .from(box.querySelectorAll(".leftBoxText a"), {
            opacity: 0,
            y: 30,
            stagger: 0.1,
              duration: 0.6,
            ease: "power2.out",
        });

    // Right box animations
    tl.from(box.querySelectorAll(".tabSection, .tabMobSection"), {
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 0.8,
            ease: "power2.out",
        }, "<0.2");
});

gsap.registegsap.registerPlugin(ScrollTrigger);

// Animate the line height as we scroll
gsap.to(".scrollLine", {
    scrollTrigger: {
        trigger: ".animationShow:last-child", // Trigger ends at the last section
        start: "top 80%", // Animation starts near the first section
        end: "bottom bottom", // Ends at the bottom of the last section
        scrub: true, // Smooth animation as you scroll
    },
    height: "100%", // Line expands to full container height
});

// Animate dots as sections come into view
const dots = document.querySelectorAll(".scrollDot");
document.querySelectorAll(".animationShow").forEach((section, index) => {
    gsap.to(dots[index], {
        scrollTrigger: {
            trigger: section,
            start: "top 80%", // Highlight dot when section reaches 80% of the viewport
            end: "bottom 20%",
            toggleClass: "activeDot", // Adds class for highlight effect
            markers: false, // Debug markers if needed
        },
        backgroundColor: "#005F5F", // Dot color changes
        duration: 0.5,
    });
});


emailjs.init("VFv3_naMz3dnon2jF");

// Email.js
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("service_81oe22w", "template_eu4lzyl", this)
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
        }, function(error) {
            console.log("FAILED...", error);
        });
});
