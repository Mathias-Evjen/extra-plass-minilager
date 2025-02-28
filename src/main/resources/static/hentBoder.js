window.onload = function hentKategorier() {
    $.get("http://localhost:8080/hentKategorier", function(data){
      console.log(data);
      printKategorier(data);
    })
}

function testKategorier(){
    let testboder = [{katNr: 1, areal: 10, volum: 9, antallLedig: 8, pris: 790}, {katNr: 2, areal: 8, volum: 6, antallLedig: 6, pris: 690}, {katNr: 3, areal: 11, volum: 12, antallLedig: 12, pris: 890}];
    printKategorier(testboder);
}

function printKategorier(kategorier) {
    let antallLedigeBoder;
    let utvid = ``;

    for(let i = 0; i < kategorier.length; i++){
        utvid = ``;
        antallLedigeBoder = kategorier[i].antallBoder - kategorier[i].antallOpptatt;
        nybod = document.createElement("tr");
        bodIKat = document.createElement("tr");
        nybod.classList.add("kategori-rad");
        bodIKat.classList.add();
        bodIKat.id = "kategori" + kategorier[i].nr;
        let boder = JSON.stringify(kategorier[i].boder)
        //utvid = `<button class="utvid-knapp" data-boder='${JSON.stringify(kategorier[i].boder)}' onclick="visBodIKat(${kategorier[i].nr}, this, ${antallLedigeBoder})">></button>`;
        nybod.innerHTML = `<td>${kategorier[i].nr}</td><td>${kategorier[i].areal}m²</td><td>${kategorier[i].volum}m³</td><td>${antallLedigeBoder}</td><td>${kategorier[i].pris}kr</td>`;
        nybod.onclick = function() {visBodIKat(kategorier[i].nr, boder, (kategorier[i].antallBoder - kategorier[i].antallOpptatt))}
        
        nybod.onmouseover = function() {this.style.backgroundColor = "lightgray";}; //Highlight rad når musen treffer
        nybod.onmouseout = function() {this.style.backgroundColor = "";}; //Fjerner highlight når musen ikke treffer raden
        
        document.getElementById("bodtabell").appendChild(nybod);
        document.getElementById("bodtabell").appendChild(bodIKat);
    }
    
}

function visBodIKat(katNummer, boderIKat, antallLedigeBoder){
    let katID = "kategori"+katNummer;
    let rad = document.getElementById(katID);
    if(rad.innerHTML.trim() !== ""){                            // Sjekker om utvid-knappen har blir trykket på
        rad.innerHTML = "";                                     // Lukker og tømmer dataen om den var trykket på
        boderIKat.textContent = ">";
    }
    else{
        if(antallLedigeBoder > 0){                              // Hvis knappen ikke var trykket på viser den dataen om det er noen ledige boder    
            let boder = JSON.parse(boderIKat);
            printUt = `<td colspan="5"><div class="bod-i-kat-rad">`;
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
            printUt = `<td colspan="5"><p class="ingen-ledige-boder-info">Det er ingen ledige boder for denne kategorien!</p></td>`
        }
        rad.innerHTML = printUt;
        boderIKat.textContent = "v";  // Endre knappens ikon for å indikere at den er åpen
    }

    
}