// Ce script est de rendre le mot de passe visible ou invisible
function visibility(){
    x = document.getElementById("password");
    y = document.getElementById("vs");
    if(x.type == "password"){
        x.type = "text";
        y.style.backgroundColor = "#f44336";
        y.value = "Hide";
    }else{
        x.type = "password";
        y.style.backgroundColor = "#008CBA";
        y.value = "Show";
    }
}