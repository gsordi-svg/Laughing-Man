const SQUARE_COUNT= 5;

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

        box.appendChild(img);
    }
    Array.from(box.children).forEach((element) =>{
        const parent = element.parentElement;
        const maxX =parent.clientWidth - element.clientWidth;
        const MaxY =parent.clientHeight - element.clientHeight;

        let dx = SPEED * (Math.random()*2-1); //This gives a number from -1 to .99999
        let dy = SPEED * (Math.random()*2-1);
        
        let x = parseInt(element.style.left) || 225;
        let y = parseInt(element.style.top) || 175;
        setInterval(()=>{
            x+=dx;
            y+=dy;

            element.style.left = x+"px";
            element.style.top = y+"px";

        }, TIMER_SPEED)
    });
});