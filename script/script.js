const text = document.querySelectorAll('.hidden');
const anima = document.querySelectorAll('.hidden2')

const options = {};

const myObserver = new IntersectionObserver ((entries) => {
    entries.forEach((entry)=> {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show')
        }
    });
}, options);


text.forEach(e => {
    myObserver.observe(e);
});


anima.forEach(e => {
    myObserver.observe(e);
});
