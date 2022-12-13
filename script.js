let beltOn = true;
let boxes = document.getElementsByClassName("boxes")
function pauseBelt(){
    if(beltOn == true) boxes.style.animationPlayState = "paused";
    else boxes.style.animationPlayState = "running";
    if(beltOn == true) beltOn = false;
    else beltOn = true
}