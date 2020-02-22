// will add the FATdn class to the username/password fields
function onUsernameInput() {
    var inputText = document.getElementById("username-input-box").value;
    if(inputText) {
        document.getElementById("username-input-label").className = "_9nyy2 FATdn";    
    } else {
        document.getElementById("username-input-label").className = "_9nyy2";    
    }
    
}