function hentBoder() {
    $.get("/hentAlleBoder", function(data){
      printBoder(data);  
    })
}

function testboder(){
    let testboder = [{katNr: 1, areal: 10, volum: 9, antallLedig: 8, pris: 790}, {katNr: 2, areal: 8, volum: 6, antallLedig: 6, pris: 690}, {katNr: 3, areal: 11, volum: 12, antallLedig: 12, pris: 890}];
    printBoder(testboder);
}

function printBoder(boder) {
    for(let i = 0; i < boder.length; i++){
        nybod = document.createElement("tr");
        nybod.classList.add();
        nybod.innerHTML = `<th>${boder[i].katNr}</th><th>${boder[i].areal}</th><th>${boder[i].volum}</th><th>${boder[i].antallLedig}</th><th>${boder[i].pris}kr`;
        document.getElementById("bodtabell").appendChild(nybod);
    }
    
}