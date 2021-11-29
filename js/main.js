var open = 1;

function opendownload(){
    if(open == 0){
        open = 1;
        var nascondi = document.getElementsByClassName('open');
        var mostra = document.getElementsByClassName('close');
        for(let i=0; i < nascondi.length; i++){
            nascondi[i].classList.add("hide");
            mostra[i].classList.remove("hide");
        }
        console.log("OPEN");
    } else {
        open = 0;
        var nascondi = document.getElementsByClassName('close');
        var mostra = document.getElementsByClassName('open');
        for(let i=0; i < nascondi.length; i++){
            nascondi[i].classList.add("hide");
            mostra[i].classList.remove("hide");
        }
        console.log("CLOSE");
    }
}