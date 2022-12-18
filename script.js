let beltOn = true;

function pauseBelt(){
    if(beltOn == true) 
    {
        document.getElementById("lever").src = "./images/Lever2.png"
        for(let i =1;i<=3;i++)
        {
            boxes = document.getElementById("box" + i)
            boxes.style.animationPlayState = "paused";
            document.getElementById("downBelt1").style.backgroundImage = 'url("./images/ConveyorD1.png")';
            document.getElementById("rightBelt").style.backgroundImage = 'url("./images/Conveyor1.png")';
            document.getElementById("downBelt2").style.backgroundImage = 'url("./images/ConveyorD1.png")';
        }
    }
    else{
        document.getElementById("lever").src = "./images/Lever1.png"
        for(let i =1;i<=3;i++)
        {
            boxes = document.getElementById("box" + i)
            boxes.style.animationPlayState = "running";
            document.getElementById("downBelt1").style.backgroundImage = 'url("./images/ConveyorD.gif")';
            document.getElementById("rightBelt").style.backgroundImage = 'url("./images/Conveyor.gif")';
            document.getElementById("downBelt2").style.backgroundImage = 'url("./images/ConveyorD.gif")';
        }
    }
    if(beltOn == true) beltOn = false;
    else beltOn = true

}
