// will add/remove the FATdn class to the username/password fields
function onUsernameInput() {
    var inputText = document.getElementById("username-input-box").value;
    if(inputText) {
        document.getElementById("username-input-label").className = "f0n8F FATdn";    
    } else {
        document.getElementById("username-input-label").className = "f0n8F ";
    }
}

function onPasswordInput() {
    var inputText = document.getElementById("password-input-box").value;
    if(inputText) {
        document.getElementById("password-input-label").className = "f0n8F FATdn";    
    } else {
        document.getElementById("password-input-label").className = "f0n8F ";
    }
}