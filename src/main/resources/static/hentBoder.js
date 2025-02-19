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
    for(let i = 0; i < kategorier.length; i++){
        antallLedigeBoder = kategorier[i].antallBoder - kategorier[i].antallOpptatt;
        nybod = document.createElement("tr");
        nybod.classList.add();
        nybod.innerHTML = `<td>${kategorier[i].nr}</td><td>${kategorier[i].areal}m²</td><td>${kategorier[i].volum}m³</td><td>${antallLedigeBoder}</td><td>${kategorier[i].pris}kr</td>`;
        document.getElementById("bodtabell").appendChild(nybod);
    }
    
}

function hentOpptatt() {
    $.get("http://localhost:8080/hentOpptatt", function(opptatt) {
        console.log(opptatt);
    })
}

function test() {
    $.get("http://localhost:8080/test", function(opptatt) {

    })
}