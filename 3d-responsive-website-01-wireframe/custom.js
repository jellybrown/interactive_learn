(() => {
    const trigger = document.querySelector(".trigger");
    const gnb = document.querySelector(".gnb");
    const section = document.querySelectorAll(".cd-section");
    const menu = document.querySelector(".menu");


    triggerEvent = () => {
        trigger.classList.toggle("active");
        gnb.classList.toggle("active");
    }
    menuHide = () => {
        if (trigger.classList.contains("active")) {
            trigger.classList.remove("active");
            gnb.classList.remove("active");

        };
    }

    for (let i = 0; i < menu.children.length; i++) {
        section[i].addEventListener("click", menuHide);
        menu.children[i].addEventListener("click", menuHide);
    }
    trigger.addEventListener("click", triggerEvent);


    /* Smooth Scrolling 
    $('.menu a').click(function (e) {
        $.scrollTo(this.hash || 0, 900)
    })
    */
})();