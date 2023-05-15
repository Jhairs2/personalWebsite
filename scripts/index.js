const navLinks = document.querySelectorAll("#header");

function removeActive() {
    navLinks.forEach(link => {
        link.classList.remove("active");
    })
}

navLinks.forEach(link => {
    link.addEventListener("click", ()=> {
        removeActive();
        link.classList.add("active");
        console.log("works");
    })
})