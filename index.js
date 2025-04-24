// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,  
    duration: 1.5,  
    easing: (t) => 1 - Math.pow(1 - t, 4), 
    smoothTouch: true,  
    touchMultiplier: 1.5, 
});

// State Initializing 
function animateLoaderCircle() {
    const loaderCircle = document.querySelector(".loaderCircle");

    setTimeout(function () {
        loaderCircle.style.top = "21.5%";
    }, 3000); 
}
gsap.registerPlugin(ScrollTrigger);

// Function to handle the animation of the loader (opacity changes, etc.)
function animateLoader() {
    const tl = gsap.timeline();

    tl.to(".loader", {
        opacity: 1,
        duration: 5,
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
            duration: 0.5,
            onComplete: () => console.log("Nav visible")
        }, "-=0.2")
        .from(".hero p", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            onComplete: () => console.log("Hero p visible")
        }, "-=0.2")
        .from(".hero a", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            onComplete: () => console.log("Hero a visible")
        }, "-=0.2");

    console.log("Animation sequence initialized.");
}

// Function to move the cursor ring based on mouse movement
gsap.registerPlugin(CustomEase);
CustomEase.create("smoothCursor", "M0,0 C0.25,0.1 0.25,1 1,1");

function followMouseCursorRing() {
    const cursorRing = document.querySelector(".cursor-ring");

    document.addEventListener("mousemove", (e) => {
        gsap.to(cursorRing, {
            duration: 0.8,
            ease: "smoothCursor",
            x: e.clientX,
            y: e.clientY,
        });
    });
}

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
            const rect = h4.getBoundingClientRect();

            spotlightRing.style.width = "3rem";
            spotlightRing.style.height = "3rem";
            spotlightRing.style.backgroundColor = "transparent";
            spotlightRing.style.border = "2px solid #ff8c00";
            spotlightRing.style.left = `${rect.left + rect.width / 2}px`;
            spotlightRing.style.top = `${rect.top + rect.height / 2}px`;
            spotlightRing.style.zIndex = "34";
        });

        h4.addEventListener("mouseleave", () => {
            spotlightRing.style.width = "1rem";
            spotlightRing.style.height = "1rem";
            spotlightRing.style.backgroundColor = "#ff8c00";
            spotlightRing.style.border = "none";
            spotlightRing.style.zIndex = "3";
        });
    });
}

// Function to create grid items dynamically based on the viewport size
function createGridItems() {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = ''; 

    // Define item size and gap
    const itemSize = 10; 
    const gap = 1; 

    const totalHeight = document.body.scrollHeight / window.innerHeight * 100;

    const columns = Math.ceil(window.innerWidth / (window.innerHeight * (itemSize / 100)));
    const rows = Math.ceil(totalHeight / itemSize);

    gridContainer.style.gridTemplateColumns = `repeat(${columns}, ${itemSize}vh)`;

    for (let i = 0; i < columns * rows; i++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridContainer.appendChild(gridItem);
    }
}

// Creating a Grid
createGridItems();

// Recalculate the grid when the window is resized
window.addEventListener('resize', createGridItems);

document.addEventListener("DOMContentLoaded", function () {
    animateLoaderCircle();
    animateLoader();
    followMouseCursorRing();
    followMouseSpotlightRing();
    buttonhoverEffect();
    createGridItems();
    window.addEventListener('resize', createGridItems);
});

gsap.utils.toArray(".titleName").forEach((heading) => {
    gsap.from(heading.querySelectorAll(".animateTitleWords"), {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: heading,
            start: "top 75%", 
            end: "bottom bottom",
            toggleActions: "play none none none"
        }
    });
})

// Projects Animation
const projectBoxes = document.querySelectorAll(".projectBox");

projectBoxes.forEach((box) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: box,
            scroller: "body",
            start: "top 75%",
            end: "top 15%",
            scrub: 0.3,
        }
    });
    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: box,
            scroller: "body",
            start: "top 55%",
            end: "top 15%",
        }
    });

    tl.from(box.querySelectorAll(".tabSection, .tabMobSection"), {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        scrub: 0.5,
        ease: "power2.out",
    }, "start");

    tl.from(box.querySelector(".leftBoxText h4"), { opacity: 0, y: 50, ease: "power2.out" }, "start")
        .from(box.querySelectorAll(".leftBoxText p"), { opacity: 0, y: 50, stagger: 0.2, ease: "power2.out" },)
        .from(box.querySelectorAll(".leftBoxText a"), { opacity: 0, y: 30, stagger: 0.1, ease: "power2.out" },);

    tl2.from(box.querySelector(".leftLine"), { scale: 0, start: "top 90%", stagger: 0.5 },)
        .from(box.querySelector(".leftRect"), { width: 0 })
        .from(box.querySelector(".leftCircle"), { scale: 0 });
});

//Magnetic effect
document.querySelectorAll('.buttonLinkText').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 4;
        const y = (e.clientY - rect.top - rect.height / 2) / 4;
        button.style.transform = `translate(${x}px, ${y}px)`;
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0, 0)';
    });
});

// Email.js
emailjs.init("VFv3_naMz3dnon2jF");

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const emailSuccessBar = document.querySelector(".emailSuccessBar");
    const submitButton = this.querySelector(".submit");

    // Disable the button and change cursor
    submitButton.disabled = true;
    submitButton.style.cursor = "wait";

    // Reset bar for a fresh animation
    emailSuccessBar.style.width = "0";
    emailSuccessBar.style.opacity = "1"; 
    emailSuccessBar.classList.remove("success", "failure");

    emailjs.sendForm("service_81oe22w", "template_eu4lzyl", this)
        .then(function (response) {
            console.log("SUCCESS!", response.status, response.text);
            emailSuccessBar.classList.add("success");
            emailSuccessBar.innerHTML = "Message Sent Successfully!";
            animateBar();
        }, function (error) {
            console.log("FAILED...", error);
            emailSuccessBar.classList.add("failure");
            emailSuccessBar.innerHTML = "Error Sending Message. Please Try Again!";
            animateBar();
        })
        .finally(() => {
            submitButton.disabled = false;
            submitButton.style.cursor = "pointer";
        });

    function animateBar() {
        setTimeout(() => {
            emailSuccessBar.style.width = "60%";
        }, 0);

        setTimeout(() => {
            emailSuccessBar.style.opacity = "0"; // Fade out the bar
        }, 3000);

        setTimeout(() => {
            emailSuccessBar.style.width = "0";
            emailSuccessBar.innerHTML = "";
        }, 3500);
    }
});

// Education
document.querySelectorAll('.animationShow').forEach((section, index) => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 90%",
            end: "top 70%",
            toggleActions: "play none reverse none",
        },
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
        ease: "power2.out",
    });
});
