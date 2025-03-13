function tabellEllerKart(){
    const checkboxTabellKart = document.getElementById("tabell-kart-checkbox");
    const checkboxOppeNede = document.getElementById("oppe-nede-checkbox");
    const kartOppe = document.getElementById("kart-oppe-div");
    const kartNede = document.getElementById("kart-nede-div");
    const tabell = document.getElementById("tabell");
    if (!checkboxTabellKart.checked){
        tabell.style.display = "block";
        kartOppe.style.display = "none";
        kartNede.style.display = "none";
    }
    else if(!checkboxOppeNede.checked && checkboxTabellKart.checked){
        tabell.style.display = "none";
        kartOppe.style.display = "block";
        kartNede.style.display = "none";
    }
    else{
        tabell.style.display = "none";
        kartOppe.style.display = "none";
        kartNede.style.display = "block";
    }
    
}