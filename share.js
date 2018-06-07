var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanButton = document.querySelectorAll(".plan button");
//var close_modal = document.getElementsByClassName("modal__action modal__action--negative");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

for (var i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener("click", () => {
        //modal.style.display = "block";
        //backdrop.style.display = "block";
        modal.classList.add("open");
        backdrop.classList.add("open");
    });
}



function close_modal_window() {
    //alert("Close modal");
    // modal.style.display = "none";
    //mobileNav.style.display = "none";
    //backdrop.style.display = "none";
    if (modal) {
        modal.classList.remove("open");
    }

    backdrop.classList.remove("open");
    mobileNav.classList.remove("open");

}

toggleButton.addEventListener("click", function() {
    // mobileNav.style.display = "block";
    //backdrop.style.display = "block";
    mobileNav.classList.add("open");
    backdrop.classList.add("open");
});

backdrop.addEventListener("click", close_modal_window);
