
// if (localStorage.getItem("pfolio") === "formal") {
//     document.body.classList.add('formal');
// } else {
//     document.body.classList.remove('formal');
// }


// function ptoggle() {
//     let animate = document.getElementById('animate-section');
//     let pfolio = document.body;

//     if (!pfolio.className.includes('formal')) {
//         localStorage.setItem("pfolio", "formal");
        
//         pfolio.classList.add('formal');

//         animate.classList.remove('animate__flash');
//         animate.classList.add('animate__bounce');

//     } else {
//         localStorage.setItem("pfolio", "casual");      
        
//         pfolio.classList.remove('formal');

//         animate.classList.remove('animate__bounce');
//         animate.classList.add('animate__flash');
        
//     }

// };


if (localStorage.getItem("pfolio") === "formal") {
    document.body.classList.add('formal');
} else {
    document.body.classList.remove('formal');
}


function ptoggle() {
    let toggle = document.getElementById('pfolio-expand');
    let body = document.body;
    let pfolio = document.getElementById('pfolio-section');

    if (!body.className.includes('formal')) {
        toggle.classList.add('animate__flash');

        localStorage.setItem("pfolio", "formal");

        body.classList.add('formal');
        
        pfolio.classList.add('animate__fadeIn');
        pfolio.classList.remove('animate__fadeOut');
        

    } else {
        toggle.classList.remove('animate__flash');
        localStorage.setItem("pfolio", "casual");    
        let timeout = 700;
        
        pfolio.classList.add('animate__fadeOut');
        pfolio.classList.remove('animate__fadeIn');

        setTimeout(function() {
            body.classList.remove('formal');
        }, timeout);
        
    }

};

function delaytoggle() {
    if (!document.body.className.includes('formal')) {
            ptoggle();
    }
    
};