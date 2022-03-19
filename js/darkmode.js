var mode = 0;

function _SetMode() {
    if (mode == 0) {
        mode = 1;
        document.getElementById("box").style.backgroundColor = "black";

        /* main box */
        var will_dark = document.getElementsByClassName("darkmode");
        for (var i = 0; i < will_dark.length; i++) {
            will_dark[i].style.color = "white";
        }

        /* darkbox */
        var minibox = document.getElementsByClassName("darkbox");
        for (var i = 0; i < minibox.length; i++) {
            minibox[i].style.backgroundColor = "black";
            minibox[i].style.boxShadow = "0 4px 16px rgba(255,255,255,.6)";
        }

        /* class #1c1e21 */
        var is1c1e21 = document.getElementsByClassName("is-1c1e21");
        for (var i = 0; i < is1c1e21.length; i++) {
            is1c1e21[i].style.color = "white";
        }

        /* footer */
        var footer = document.getElementsByClassName("dark-footer");
        for (var i = 0; i < footer.length; ++i) {
            footer[i].style.backgroundColor = "rgb(20,20,20)";
        }

        /* sourceforge logo in footer */
        var nascondi = document.getElementsByClassName("src-fs-white");
        var mostra = document.getElementsByClassName("src-fs-dark");
        for(let i=0; i < nascondi.length; i++){
            nascondi[i].classList.add("hide");
            mostra[i].classList.remove("hide");
        }

    } else if (mode == 1) {

        /* restore */
        mode = 0;
        document.getElementById("box").style.backgroundColor = "white";
        var will_dark = document.getElementsByClassName("darkmode");
        for (var i = 0; i < will_dark.length; i++) {
            will_dark[i].style.color = "#444950";
        }

        /* darkbox */
        var minibox = document.getElementsByClassName("darkbox");
        for (var i = 0; i < minibox.length; i++) {
            minibox[i].style.backgroundColor = "white";
            minibox[i].style.boxShadow = "0 4px 16px rgba(0,0,0,.6)";
        }

        /* #1c1e21 */
        var is1c1e21 = document.getElementsByClassName("is-1c1e21");
        for (var i = 0; i < is1c1e21.length; i++) {
            is1c1e21[i].style.color = "#1c1e21";
        }

        /* footer */
        var footer = document.getElementsByClassName("dark-footer");
        for (var i = 0; i < footer.length; ++i) {
            footer[i].style.backgroundColor = "#f5f6f7";
        }

        /* sourceforge logo in footer */
        var nascondi = document.getElementsByClassName("src-fs-dark");
        var mostra = document.getElementsByClassName("src-fs-white");
        for(let i=0; i < nascondi.length; i++){
            nascondi[i].classList.add("hide");
            mostra[i].classList.remove("hide");
        }
    }
}