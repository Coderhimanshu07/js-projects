// Get DOM elements
let formTitle = document.getElementById("form-Title");
let overlay = document.getElementById("overlay");

// Function to open popup
function openPopup(title) {
    formTitle.textContent = title;
    overlay.style.display = "flex";
}

// Function to close popup
function closePopup(event) {
    overlay.style.display = "none";
}