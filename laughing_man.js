const SQUARE_COUNT= 5;
const SPEED = 5;
const TIMER_SPEED =50;

document.addEventListener("DOMContentLoaded", function () {
    let box = document.querySelector("#box");

    document.querySelector("#square").addEventListener("click, ()=>{ 
        alert("OMG YOU CLICKED ME!");
    
    });
    let box = document.querySelector("#box");

    for(let i = 0;i < SQUARE_COUNT; i++{
        let img = document.createElement("img");
        
        img.src = "laughing_man.jpg";
        img.alt = "Catch the lauging Man!";
        img.className = "square";

        img.style.left = "225px";
        img.style.top = "175px";

        img.addEventListener("mouseover", function() {
            img.src = "orochimaru_50x50.jpg";
        });

        img.addEventListener("mouseout", function() {
            img.src = "laughing_man.jpg";
        });

        box.appendChild(img);
    }
    function getColor() {
        let red = parseInt(Math.random() * 256);
        let green = parseInt(Math.random() * 256);
        let blue = parseInt(Math.random() * 256);

        return "rgb(" + red + "," + green + "," + blue + ")";
    }
    function moveSquare(element){
        let parent = element.parentElement;

        let x = parseInt(element.style.left);
        let y = parseInt(element.style.top);

        let dx = SPEED * (Math.random()*2-1); //This gives a number from -1 to .99999
        let dy = SPEED * (Math.random()*2-1);

        setInterval(function() {
            let maxX =parent.clientWidth - element.clientWidth;
            let maxY =parent.clientHeight - element.clientHeight;

            x+=dx;
            y+=dy;
        if (x <= 0 || x >= maxX) {
            dx = -dx;
            element.style.borderColor = getColor();
            parent.style.borderColor = getColor();
            parent.style.backgroundColor = getColor();  `
        }
        if (y <= 0 || y >= maxY) {
            dy = -dy;
            element.style.borderColor = getColor();
            parent.style.borderColor = getColor();
            parent.style.backgroundColor = getColor();
        }

        element.style.left = x+"px";
        element.style.top = y+"px";

    }, TIMER_SPEED)
}