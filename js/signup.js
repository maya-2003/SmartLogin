var welcomeText = document.getElementById("registedrName");
var email = document.getElementById("registedrEmail");
var pwrd = document.getElementById("registerdPassword");
var loginBtn = document.getElementById("signupBtn");
var message = document.getElementById("message");
var usersArr = [];
if (localStorage.getItem("usersArr") != null) {
    usersArr = JSON.parse(localStorage.getItem("usersArr"));
}

function validateUser(email) {
    return !usersArr.some(function(user) {
        return user.email === email;
    });

}
function logoutUser() {
    if (email.value.trim() == '' || pwrd.value.trim() == '' || welcomeText.value.trim() == '') {
        message.innerHTML="All inputs are required";
        message.style.color = "#dc3545";
    }
    else{
        var isValid = validateUser(email.value);
    if (isValid && welcomeText.value.trim() !== '' && email.value.trim() !== '' && pwrd.value.trim() !== '') {
        var user = {
            name: welcomeText.value,
            email: email.value,
            password: pwrd.value
        };
        usersArr.push(user);
        localStorage.setItem("usersArr", JSON.stringify(usersArr));
        message.innerHTML="Success";
        message.style.color = "#28a745";
        clearForm();
    }
    else {
        message.innerHTML="email already exists";
        message.style.color = "#dc3545";
    }
    
    }
    
}

function clearForm() {
    welcomeText.value = "";
    email.value = "";
    pwrd.value="";
}
loginBtn.addEventListener("click", logoutUser);