

let toggled = false;

function ptoggle() {
    let animate = document.getElementById('animate-section');
    let pfolio = document.getElementsByClassName('portfolio');

    if (!toggled) {
        toggled = true;
        
        for (let i = 0; i < pfolio.length; i++) {
            pfolio[i].style.display = "block"
        }
        animate.classList.remove('animate__flash')
        animate.classList.add('animate__bounce');

    } else {
        toggled = false;        

        for (let i = 0; i < pfolio.length; i++) {
            pfolio[i].style.display = "none"
        }

        animate.classList.remove('animate__bounce');
        animate.classList.add('animate__flash');
        
    }

};