const cursor = document.querySelectorAll(".cursor");
const links = document.querySelectorAll(".menu__list__item");
const sections = document.querySelector(".dark__section");

/* Animaciones del cursor */
window.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.forEach(el => {
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;

        links.forEach(link => {
            link.addEventListener("mouseenter", () => {
                el.classList.add("hover");        
            });
            link.addEventListener("mouseleave", () => {
                el.classList.remove("hover");
            });
        });
    });
});

/* Utilizo la API Intersection Observer para hacer un hover en la sección academica, y agregarle un fondo oscuro */
const options = {
    root: null,
    threshold: 0.2,
    rootMargin: "250px"
};

const observer = new IntersectionObserver(function
    (entries, observer) {
        entries.forEach(entry => {
            entry.target.classList.toggle("inverse");
        });

    }, options);

observer.observe(sections);