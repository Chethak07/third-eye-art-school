function openPopup(src) {
    document.getElementById("popup").style.display = "block";
    document.getElementById("popupImg").src = src;
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Close popup when clicking outside the image
document.addEventListener("click", function(e) {
    if (e.target.id === "popup") {
        closePopup();
    }
});
