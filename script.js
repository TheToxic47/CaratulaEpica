function btnChanger(){
    let bg = document.getElementById("myID").style.backgroundImage;
    bg = bg.replace("url(`img/fondo21.png`,` `img/fondo2.png`))");
    let x = document.getElementById("btn-color").style.background = "indigo";
    let y = document.getElementById("btn-color").style.color = "gold";
}

function btnCambiar(){
    let bg = document.getElementById("myID").style.backgroundImage;
    bg = URL("img/fondo2.png");
}