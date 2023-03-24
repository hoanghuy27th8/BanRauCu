navbar = document.querySelector("#main-menu").querySelectorAll("a");
console.log(navbar);

navbar.forEach(element => {
    element.addEventListener("click", function(){
        navbar.forEach(nav=>nav.classList.remove("active"))

        this.classList.add("active");
    })
});

$(document).ready(function () {
    $('#toggle').click(function () {
        $('nav').slideToggle();
    });
});