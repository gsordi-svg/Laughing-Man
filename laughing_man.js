const SQUARE_COUNT=3;

document.addEventListener('DOMContentLoaded', ()=> {
    document.querySelector("#square").addEventListener("click, ()=>{ 
        alert("OMG YOU CLICKED ME!");
    
    });
    let box = document.querySelector("#box");

    for(let i = 0;i < SQUARE_COUNT; i++{
        //Make the element, but its not anything or on the page
        let square = document.createElement('img');
        //Set the attributes/properties of that element]
        square.src = "laughing_man.jpg";
        square.alt = "Catch the lauging Man!";
        square.className = "square";
        box.appendChild(square);
    }
    Array.from(box.children).forEach(() =>{
        let dx = Math.random()*2-1; //This gives a number from -1 to .99999
        let dy;
        setInterval(()=>{

        }, TIMER_SPEED)
    });
});