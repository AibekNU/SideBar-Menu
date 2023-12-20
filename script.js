document.addEventListener("DOMContentLoaded", function () {
    const first__btn = document.querySelector(".feat__btn"),
            second__btn = document.querySelector(".serv__btn"),
            feat__show = document.querySelector("nav ul .feat__show"),
            serv__show = document.querySelector("nav ul .serv__show"),
            one__first = document.querySelector("nav ul .first"),
            second__first = document.querySelector("nav ul .second"),
            nav__bar = document.querySelector("nav ul li"),
            btn__menu = document.querySelector(".button"),
            sidebar = document.querySelector(".sidebar");

    btn__menu.addEventListener("click", function () {
        this.classList.toggle("click");
        sidebar.classList.toggle("show");
    });

    first__btn.addEventListener("click", function () {
        feat__show.classList.toggle("show");
        one__first.classList.toggle("rotate");
        this.parentElement.classList.toggle("active");
    });

    second__btn.addEventListener("click", function () {
        serv__show.classList.toggle("show1");
        second__first.classList.toggle("rotate");
        this.parentElement.classList.toggle("active");
    });
});
