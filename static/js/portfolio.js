
if (localStorage.getItem("pfolio") === "formal") {
    document.body.classList.add('formal');
} else {
    document.body.classList.remove('formal');
}


function ptoggle() {
    let animate = document.getElementById('animate-section');
    let pfolio = document.body;

    if (!pfolio.className.includes('formal')) {
        localStorage.setItem("pfolio", "formal");
        
        pfolio.classList.add('formal');

        animate.classList.remove('animate__flash');
        animate.classList.add('animate__bounce');

    } else {
        localStorage.setItem("pfolio", "casual");      
        
        pfolio.classList.remove('formal');

        animate.classList.remove('animate__bounce');
        animate.classList.add('animate__flash');
        
    }

};