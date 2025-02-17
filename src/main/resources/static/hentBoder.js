function hentBoder() {
    $.get("/hentAlleBoder", function(data){
      printBoder(data);  
    })
}

function testboder(){
    let testboder = [{katNr: 1, areal: 10, volum: 9, antallLedig: 8}, {katNr: 2, areal: 8, volum: 6, antallLedig: 6}, {katNr: 3, areal: 11, volum: 12, antallLedig: 12}];
    printBoder(testboder);
}

function printBoder(boder) {
    for(let i = 0; i < boder.length; i++){
        nybod = document.createElement("tr");
        nybod.classList.add();
        nybod.innerHTML = `<td>${boder[i].katNr}</td><td>${boder[i].areal}</td><td>${boder[i].volum}</td><td>${boder[i].antallLedig}</td>`;
        document.getElementById("bodtabell").appendChild(nybod);
    }

}