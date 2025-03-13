function tabellEllerKart(){
    const checkbox = document.getElementById("tabell-kart-checkbox");
    const kart = document.getElementById("kart");
    const tabell = document.getElementById("tabell");
    if (!checkbox.checked){
        tabell.style.display = "block";
        kart.style.display = "none";
    }
    else{
        tabell.style.display = "none";
        kart.style.display = "block";
    }
}