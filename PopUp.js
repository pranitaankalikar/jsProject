const btn = document.getElementById('btn');
const del = document.getElementById('del');
const contain = document.getElementById('container');

btn.addEventListener('click', () => {
    contain.style.display = 'flex'
});

del.addEventListener('click', () => {
    contain.style.display = 'none';
})