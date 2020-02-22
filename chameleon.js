// will add the FATdn class to the username/password fields
function onUsernameInput() {
    var inputText = document.getElementById("username-input-box").value;
    alert();
    if(inputText) {
        document.getElementById("username-input-span").className = "_9nyy2 FATdn";    
    } else {
        document.getElementById("username-input-span").className = "_9nyy2";    
    }
    
}