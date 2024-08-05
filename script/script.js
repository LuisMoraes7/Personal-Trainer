

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            handleElementOutOfView(entry.target);
        } else{
            handleElementInView(entry.target);
        }
    });
}, {
    threshold: 1
});
let arrow = document.querySelectorAll('#whoAmIArrow')
arrow.forEach(arrow => observer.observe(arrow))
observer.observe(arrow);

function handleElementOutOfView(target) {
    target.classList.remove('arrowmove')
}

function handleElementInView(target){
    target.classList.add('arrowmove')
}