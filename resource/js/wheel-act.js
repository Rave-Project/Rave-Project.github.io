/*
 * smooth scroll
 */

let temp = 0;

function act(event) {
    event.preventDefault();

    scale += event.deltaY;
    
    if ((temp-3) < scale) {
        window.scrollTo({
            top: 800,
            behavior: 'smooth'
        });
    } else if ((temp+3) > scale) {
        window.scrollTo({
            top: -800,
            behavior: 'smooth'
        });
    }

    temp = scale;
}

let scale = 0;
const el = document.querySelector('body');
//el.onwheel = act;