const nav = document.querySelector('.nav');
const showNavBtn = document.getElementById('menuBtn');

console.log(nav)
console.log(showNavBtn) 

showNavBtn.addEventListener('click', () => {
    if(nav.id) {
        nav.removeAttribute('id')
    }else {
        nav.setAttribute('id', 'visible')
    }
})  