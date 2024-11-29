var email = document.getElementById("loginEmail");
var pwrd = document.getElementById("loginPwrd");
var loginBtn = document.getElementById("loginBtn");
var message = document.getElementById("message");
var usersArr = [];
if (localStorage.getItem("usersArr") != null) {
    usersArr = JSON.parse(localStorage.getItem("usersArr"));
}

function logoutUser() {
    if (email.value.trim() == '' || pwrd.value.trim() == '') {
        message.innerHTML="All inputs are required";
        message.style.color = "#dc3545";
    }
    else {
    var foundUser = usersArr.find(user => user.email === email.value.trim() && user.password === pwrd.value.trim());
    if(foundUser){
        localStorage.setItem("currentUser", JSON.stringify(foundUser));
        location.replace("home.html");
    }
    else{
        message.innerHTML="incorrect email or password";
        message.style.color = "#dc3545";
    }

    }
}
loginBtn.addEventListener("click", logoutUser);