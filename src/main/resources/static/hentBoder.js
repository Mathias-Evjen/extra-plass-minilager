window.onload = function hentKlasser() {
    $.get("http://localhost:8080/hentKlasser", function(data){
      console.log(data);
      printKlasser(data);
    })
}



function testklasser(){
    let testboder = [{klasseNr: 1, areal: 10, volum: 9, antallLedig: 8, pris: 790}, {klasseNr: 2, areal: 8, volum: 6, antallLedig: 6, pris: 690}, {katNr: 3, areal: 11, volum: 12, antallLedig: 12, pris: 890}];
    printKlasser(testboder);
}

function printKlasser(klasser) {
    let antallLedigeBoder;
    let utvid = ``;

    for(let i = 0; i < klasser.length; i++){
        utvid = ``;
        antallLedigeBoder = klasser[i].antallBoder - klasser[i].antallOpptatt;
        nybod = document.createElement("tr");
        bodIKat = document.createElement("tr");
        nybod.classList.add("klasse-rad");
        bodIKat.classList.add();
        bodIKat.id = "klasse" + klasser[i].nr;
        let boder = JSON.stringify(klasser[i].boder)
        //utvid = `<button class="utvid-knapp" data-boder='${JSON.stringify(klasser[i].boder)}' onclick="visBodIKat(${klasser[i].nr}, this, ${antallLedigeBoder})">></button>`;
        nybod.innerHTML = `<td>${klasser[i].nr}</td><td>${klasser[i].areal}m²</td><td>${klasser[i].volum}m³</td><td>${antallLedigeBoder}</td><td>${klasser[i].pris}kr</td>`;
        nybod.onclick = function() {visBodIKat(klasser[i].nr, boder, (klasser[i].antallBoder - klasser[i].antallOpptatt))}
        
        nybod.onmouseover = function() {this.style.backgroundColor = "lightgray";}; //Highlight rad når musen treffer
        nybod.onmouseout = function() {this.style.backgroundColor = "";}; //Fjerner highlight når musen ikke treffer raden
        
        document.getElementById("bodtabell").appendChild(nybod);
        document.getElementById("bodtabell").appendChild(bodIKat);
    }
    
}

function visBodIKat(klasseNummer, boderIKat, antallLedigeBoder){
    let katID = "klasse" + klasseNummer;
    let rad = document.getElementById(katID);
    if(rad.innerHTML.trim() !== ""){                            // Sjekker om utvid-knappen har blir trykket på
        rad.innerHTML = "";                                     // Lukker og tømmer dataen om den var trykket på
        boderIKat.textContent = ">";
    }
    else{
        if(antallLedigeBoder > 0){                              // Hvis knappen ikke var trykket på viser den dataen om det er noen ledige boder    
            let boder = JSON.parse(boderIKat);
            printUt = `<td colspan="5"><p style="text-align: center; font-weight: bold;"> Ved å trykke på knappen "Vis i kart", vil du kunne se hvor boden befinner seg på et kart over bygget.</p><div class="bod-i-kat-rad">`;
            for(let i = 0; i < boder.length; i++){
                if(!boder[i].opptatt){
                    printUt += `
                    <div class="bod-i-kat-item">
                    <div>Bod nummer: ${boder[i].nr}</div>
                    <div>Etasje: ${boder[i].etasje === 1 ? "Oppe" : "Nede"}</div>
                    <button>Vis i kart</button>
                    </div>`;
                }
            }
            printUt += `</div></td>`
        }
        else{                                                   // Hvis knappen ikke var trykket på viser den dataen om det ikke var ledige boder 
            printUt = `<td colspan="5"><p class="ingen-ledige-boder-info" style="font-weight: bold;">Det er ingen ledige boder for denne klassen!</p></td>`
        }
        rad.innerHTML = printUt;
        boderIKat.textContent = "v";  // Endre knappens ikon for å indikere at den er åpen
    }
}

