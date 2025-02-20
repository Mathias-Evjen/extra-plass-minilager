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
        nybod.classList.add();
        bodIKat.classList.add();
        bodIKat.id = "kategori" + kategorier[i].nr;
        if (antallLedigeBoder > 0){
            let boder = JSON.stringify(kategorier[i].boder)
            utvid = `<button data-boder='${JSON.stringify(kategorier[i].boder)}' onclick="visBodIKat(${kategorier[i].nr}, this)">></button>`;
        }
        nybod.innerHTML = `<td>${utvid} ${kategorier[i].nr}</td><td>${kategorier[i].areal}m²</td><td>${kategorier[i].volum}m³</td><td>${antallLedigeBoder}</td><td>${kategorier[i].pris}kr</td>`;
        document.getElementById("bodtabell").appendChild(nybod);
        document.getElementById("bodtabell").appendChild(bodIKat);
    }
    
}

function visBodIKat(katNummer, boderIKat){
    let katID = "kategori"+katNummer;
    let rad = document.getElementById(katID);
    if(rad.innerHTML.trim() !== ""){         //Sjekker om utvid-knappen har blir trykket på
        rad.innerHTML = "";
        boderIKat.textContent = ">";
    }
    else{                                                                   //Om knappen ikke har har blitt trykket på viser den de ledige bodene
        let boder = JSON.parse(boderIKat.getAttribute('data-boder'));
        printUt = `<td colspan="5"><div class="bod-i-kat-rad">`;
        for(let i = 0; i < boder.length; i++){
            if(!boder[i].opptatt){
                printUt += `
                <div class="bod-i-kat-item">
                <div>Bod nummer:${boder[i].nr}</div>
                <div>1.etasje</div>
                <button>Vis i kart</button>
                </div>`;
            }
        }
        printUt += `</div></td>`
        rad.innerHTML = printUt;
        boderIKat.textContent = "v";
    }

    
}