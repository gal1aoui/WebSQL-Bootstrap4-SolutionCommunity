// cette script pour mettre une commentaire
document.getElementById("btn").onclick = function(){
    var msg = document.getElementById("say").value;
    document.getElementById("msgarea").innerHTML += "<div style='border: .1px solid gray; margin-top:2%'> <img src='img/msg.png' width='5%' height='50px'/> Votre message : "+ msg+"</div>"; 
    document.getElementById("say").value = "";
};