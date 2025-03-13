function tabellEllerKart(){
    const checkboxTabellKart = document.getElementById("tabell-kart-checkbox");
    const checkboxOppeNede = document.getElementById("oppe-nede-checkbox");
    const kartOppe = document.getElementById("kart-oppe-div");
    const kartNede = document.getElementById("kart-nede-div");
    const tabell = document.getElementById("tabell");
    const kartDiv = document.getElementById("kart-div")
    if (!checkboxTabellKart.classList.contains("active")){
        tabell.style.display = "block";
        kartOppe.style.display = "none";
        kartNede.style.display = "none";
        kartDiv.style.display = "none";
    }
    else if(!checkboxOppeNede.classList.contains("active") && checkboxTabellKart.classList.contains("active")){
        console.log(checkboxOppeNede.classList.contains("active"))
        tabell.style.display = "none";
        kartOppe.style.display = "block";
        kartNede.style.display = "none";
        kartDiv.style.display = "block";
    }
    else {
        console.log(checkboxOppeNede.classList.contains("active"))
        tabell.style.display = "none";
        kartOppe.style.display = "none";
        kartNede.style.display = "block";
        kartDiv.style.display = "block";
    }
    
}