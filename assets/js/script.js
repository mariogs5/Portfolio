function openPopup(popupId) {
    document.getElementById(popupId).style.display = "block";
    document.body.classList.add("no-scroll");
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
    document.body.classList.remove("no-scroll");
}
