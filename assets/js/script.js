function openPopup(popupId) {
    var popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = "block";
        document.body.classList.add("no-scroll");
    }
}

function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = "none";
        document.body.classList.remove("no-scroll");
    }
}
