var mode = 0;

function _SetMode() {
    if (mode == 0) {
        mode = 1;
        alert("DarkMode");
    } else if (mode == 1) {
        mode = 0;
        alert("WhiteMode");
    }
}