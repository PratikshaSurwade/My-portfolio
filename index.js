// Function to handle the loader circle animation and position change
function animateLoaderCircle() {
    const loaderCircle = document.querySelector(".loaderCircle");

    // After 3 seconds when the circle is fully drawn, start the next transitions
    setTimeout(function () {
        loaderCircle.style.top = "19.0%"; 
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
    .from(".hero h3", {
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

function h4hoverEffect() {
    const h4Elements = document.querySelectorAll("nav .NavItems h4");
    const spotlightRing = document.querySelector(".spotlight-ring");

h4Elements.forEach(h4 => {
    h4.addEventListener("mouseenter", (event) => {
        // Get the position and dimensions of the h4
        const rect = h4.getBoundingClientRect();
        
        // Adjust spotlight-ring's size and position
        spotlightRing.style.width = "2rem";
        spotlightRing.style.height = "2rem";
        spotlightRing.style.backgroundColor = "transparent";
        spotlightRing.style.border = "2px solid #ff8c00";
        spotlightRing.style.position = "absolute";
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

// Initialize functions on page load
document.addEventListener("DOMContentLoaded", function () {
    console.log("Starting animation...");

    animateLoaderCircle(); // Start loader circle position change
    animateLoader(); // Start loader animation
    followMouseCursorRing(); // Activate cursor ring animation
    followMouseSpotlightRing(); // Activate spotlight ring animation
    h4hoverEffect();
    createGridItems(); // Create grid items

    // Re-create grid items on resize for responsiveness
    window.addEventListener('resize', createGridItems);
});
