// opening video dilog box
let popUp = document.getElementById("dilouge");
function playVideo() {
  popUp.style.display = "block";
}

// Close video dilouge box
function closePopUp() {
  popUp.style.display = "none";
}

// Conditional Rendering for Home and List Comonent
function list() {
  let listComponent = document.getElementById("listComponent");
  listComponent.style.display = "!block" ? "block" : "none";

  let homeComponent = document.getElementById("homeComponent");
  homeComponent.style.display = "none";
}
