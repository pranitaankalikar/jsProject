const img = document.querySelector('img');

img.addEventListener('mousemove', (e) => {
    //console.log(e.target.offsetLeft,e.target.offsetTop,e.clientX,e.clientY);
    const x = e.clientX - e.target.offsetLeft; // e.target.offset(left, top) are fixed for that location but client (x and y changes) with mouse move
    const y = e.clientY - e.target.offsetTop;

    img.style.transformOrigin= `${x}px ${y}px` // it will change the center of the image to the x and y
    img.style.transform = "scale(2)"; // this will zoom the img by 2
})

img.addEventListener('mouseleave', () => {
    img.style.transformOrigin = 'center center';
    img.style.transform = "scale(1)";
})
