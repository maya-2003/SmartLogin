var logoutBtn = document.getElementById("logoutBtn");
var currentUser = JSON.parse(localStorage.getItem("currentUser"));
var welcomeText = document.getElementById("username");
if (currentUser) {
    welcomeText.textContent = `Welcome ${currentUser.name}`;
} else {
    location.replace("login.html");
}

function logoutUser() {
    localStorage.removeItem("currentUser");
    location.replace("login.html");

}
logoutBtn.addEventListener("click", logoutUser);