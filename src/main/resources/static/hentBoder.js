document.addEventListener("DOMContentLoaded", () => {
    $.get(`http://${ADDR}:8080/hentKlasser`, function(data){
      printKlasser(data);
    })
})

//Printer ut innhold til tabellen
function printKlasser(klasser) {
    let antallLedigeBoder;
    
    for(let i = 0; i < klasser.length; i++){
        utvid = ``;
        antallLedigeBoder = klasser[i].antallBoder - klasser[i].antallOpptatt;
        let nybod = document.createElement("tr"); //Lager en rad for en klasse
        let bodIKat = document.createElement("tr"); //Lager en rad hvor de ledige bodene skal bli vist, men denne vil være blank så lenge klasse raden ikke er trykket på
        nybod.classList.add("klasse-rad");
        bodIKat.classList.add();
        bodIKat.id = "klasse" + klasser[i].nr; //Gir en id til radene hvis bodene skal vises for å finne frem til raden senere.
        let boder = JSON.stringify(klasser[i].boder)
        
        //Innholdet i raden med en onclick funksjon som kaller på en annen funksjon for å legge innhold i bodIKat radene.
        nybod.innerHTML = `<td>${klasser[i].nr}</td><td>${klasser[i].areal}m²</td><td>${klasser[i].volum}m³</td><td>${antallLedigeBoder}</td><td>${klasser[i].pris}kr</td>`;
        nybod.onclick = function() {visBodIKlasse(klasser[i].nr, boder, (klasser[i].antallBoder - klasser[i].antallOpptatt))}
        
        nybod.onmouseover = function() {this.style.backgroundColor = "lightgray";}; //Highlight rad når musen treffer
        nybod.onmouseout = function() {this.style.backgroundColor = "";}; //Fjerner highlight når musen ikke treffer raden
        
        //Pusher ut radene til nettsiden
        document.getElementById("bodtabell").appendChild(nybod);
        document.getElementById("bodtabell").appendChild(bodIKat);
    }
    
}

//Printer ut alle ledige boder til en klasse som ble trykket på
function visBodIKlasse(klasseNummer, boderIKat, antallLedigeBoder){
    let printUt;
    let katID = "klasse" + klasseNummer; //Brukes til å finne raden som ble trykket på
    let rad = document.getElementById(katID);

    if(rad.innerHTML.trim() !== ""){ //Lukke raden med boder
        rad.innerHTML = "";                        
    }
    else{
        if(antallLedigeBoder > 0){ //Hvis klassen har ledige boder legger den til alle boder med html kode i printUt variabelen.
            let boder = JSON.parse(boderIKat);
            printUt = `<td colspan="5"><p style="text-align: center; font-weight: bold;"> Ved å trykke på knappen "Vis i kart", vil du kunne se hvor boden befinner seg på et kart over bygget.</p><div class="bod-i-kat-rad">`;
            for(let i = 0; i < boder.length; i++){
                if(!boder[i].opptatt){
                    printUt += `
                    <div class="bod-i-kat-item">
                    <div>Bod nummer: ${boder[i].nr}</div>
                    <div>Etasje: ${boder[i].etasje === 1 ? "Oppe" : "Nede"}</div>
                    <button onclick="highlightBodIKart(${boder[i].nr})">Vis i kart</button>
                    </div>`;
                }
            }
            printUt += `</div></td>`
        }
        else{ //Hvis klassen ikke har ledige boder kommer det en melding på skjermen om at det ikke er noen ledige boder i den klassen
            printUt = `<td colspan="5"><p class="ingen-ledige-boder-info" style="font-weight: bold;">Det er ingen ledige boder for denne klassen!</p></td>`
        }
        rad.innerHTML = printUt; //Printer ut alle bodene for klassen som ble trykket på i en rad
    }
}

function toggleSwitch() {
    document.querySelector('.switch-container').classList.toggle('active');
}

let highlightedBod = null;

function highlightBodIKart(bodNr){
    if (highlightedBod) document.getElementById(highlightedBod).classList.remove("highlight-bod-i-kart");

    for (const bod of bodArray) {
        if (bod.nr === bodNr && bod.etasje === -1) {
            $("#oppe-nede-checkbox").prop('checked', true);
            break;
        }
        else $("#oppe-nede-checkbox").prop('checked', false);
    }

    document.getElementById(bodNr).classList.add("highlight-bod-i-kart");
    document.getElementById("tabell-kart-checkbox").checked = "checked";
    highlightedBod = bodNr;
    tabellEllerKart();
}
