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

var crsr = document.querySelector("#cursor");


document.addEventListener("mousemove",function(details){
    crsr.style.left = details.x+"px";
    crsr.style.top = details.y+"px";
})

document.addEventListener("",function(details){
    crsr.style.left = details.x+"px";
    crsr.style.top = details.y+"px";
})


// document.querySelector(".skillsSlider").cloneNode(true);
// document.querySelector()