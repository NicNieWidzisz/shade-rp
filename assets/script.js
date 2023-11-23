
const hamburger = document.querySelector('.hamburger');
const hiddenElements  =  document.querySelectorAll('.hidden')

const observer = new IntersectionObserver ((entries) =>  {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})



hiddenElements.forEach((el) => observer.observe(el));

document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.hamburger').classList.toggle('active')
    document.querySelector('#header-right-section').classList.toggle('active')
})

