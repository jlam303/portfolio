let beltOn = true;

function pauseBelt(){
    if(beltOn == true) 
    {
        for(let i =1;i<=3;i++)
        {
            boxes = document.getElementById("box" + i)
            boxes.style.animationPlayState = "paused";
        }
    }
    else{
        for(let i =1;i<=3;i++)
        {
            boxes = document.getElementById("box" + i)
            boxes.style.animationPlayState = "running";
        }
    }
    if(beltOn == true) beltOn = false;
    else beltOn = true
}