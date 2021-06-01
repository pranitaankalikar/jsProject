const img = document.getElementById('images');

let index =0;
function move() {
    index++;
    if(index === 4) { index = 0; }

    img.style.transform= `translateX(${-index * 300}px)`;
}

setInterval(move,2000);