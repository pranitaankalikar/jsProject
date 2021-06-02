const toggle = document.getElementById('toggle');
let change = 1;

setTimeout(() =>document.body.style.transition = '1000ms' ,100);

toggle.addEventListener('mouseover', () => {
    document.body.classList.toggle('dark');
    if(change %2 ==0) { toggle.style.backgroundColor = 'black'; }
    else { toggle.style.backgroundColor = 'white'; }
    change++;
})

