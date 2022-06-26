

let toggled = false;

function ptoggle() {
    if (!toggled) {
        toggled = true;
        let pfolio = document.getElementsByClassName('portfolio');

        for (let i = 0; i < pfolio.length; i++) {
            pfolio[i].style.display = "block"
        }
    } else {
        toggled = false;
        let pfolio = document.getElementsByClassName('portfolio');

        for (let i = 0; i < pfolio.length; i++) {
            pfolio[i].style.display = "none"
        }
    }

};