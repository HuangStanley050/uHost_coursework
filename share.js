var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanButton = document.querySelectorAll(".plan button");
//var close_modal = document.getElementsByClassName("modal__action modal__action--negative");

for (var i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener("click", () => {
        modal.style.display = "block";
        backdrop.style.display = "block";
    });
}

function close_modal_window() {
    //alert("Close modal");
    modal.style.display = "none";
    backdrop.style.display = "none";
}
