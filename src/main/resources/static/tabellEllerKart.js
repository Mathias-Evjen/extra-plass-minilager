function tabellEllerKart() {
    const checkboxTabellKart = document.getElementById("tabell-kart-checkbox");
    const checkboxOppeNede = document.getElementById("oppe-nede-checkbox");
    const oppeNedeSwitch = document.querySelector(".switch-wrapper-oppe-nede");
    const kartOppe = document.getElementById("kart-oppe-div");
    const kartNede = document.getElementById("kart-nede-div");
    const tabell = document.getElementById("tabell");
    const kartDiv = document.getElementById("kart-div");
    const kartContainer = document.getElementById("kart-container");
    const instruksjonstekst = document.getElementById("kart-instruksjon")

    if (!checkboxTabellKart.classList.contains("active")) {
        tabell.style.display = "block";
        kartDiv.style.display = "none";
        kartContainer.style.display = "none";
        kartOppe.style.display = "none";
        kartNede.style.display = "none";
        oppeNedeSwitch.style.display = "none";
        instruksjonstekst.style.display = "none"; 
    } else {
        tabell.style.display = "none";
        kartDiv.style.display = "block";
        kartContainer.style.display = "block";
        oppeNedeSwitch.style.display = "flex";
        instruksjonstekst.style.display = "block"; 

        if (!checkboxOppeNede.classList.contains("active")) {
            kartOppe.style.display = "block";
            kartNede.style.display = "none";
            kartContainer.style.height = "auto";
        } else {
            kartOppe.style.display = "none";
            kartNede.style.display = "block";
            kartContainer.style.height = "auto";
        }
    }
}