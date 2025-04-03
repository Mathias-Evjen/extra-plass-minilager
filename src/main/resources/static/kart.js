import {printKartOppeLiggende} from "./kartOppeLiggende.js";
import {printKartOppeStaaende} from "./kartOppeStaaende.js";
import {printKartNedeStaaende} from "./kartNedeStaaende.js";
import {printKartNedeLiggende} from "./kartNedeLiggende.js";

const ADDR = "localhost";
window.ADDR = ADDR;

const bodArray = [];
window.bodArray = bodArray;
const klasseArray = [];

// Kaller API for å hente boder og klasser og legger dem inn i hvert sitt array
window.onload = function hentBoder() {
    $.get(`http://${ADDR}:8080/hentBoder`, function(boder) {

        // Går gjennom alle bodene fra API og oppdaterer kartet visuelt
        for (const bod of boder) {
            if (bod.nr === 9 || bod.nr === 305) continue;
            let kartBod = document.getElementById(bod.nr);
            if (kartBod != null) {
                kartBod.setAttribute("fill", bod.opptatt ? "#d06a6a" : "#71bd6d");  // Setter boden til rød hvis den er opptatt og grønn hvis den er ledig
            }
            bodArray.push(bod);
        }
    })

    $.get(`http://${ADDR}:8080/hentKlasser`, function(klasser) {
        for (const klasse of klasser) {
            klasseArray.push(klasse);
        }
    })
}

document.addEventListener("DOMContentLoaded", function(){
    printMap("oppe");
});
document.addEventListener("DOMContentLoaded", function () {
    printMap("nede");
})


function printMap(etasje){
    console.log(etasje)
    if (etasje === "oppe") {
        window.innerWidth >= 1087 ? document.getElementById("kart-oppe-div").innerHTML =  printKartOppeLiggende() : document.getElementById("kart-oppe-div").innerHTML =  printKartOppeStaaende();
    }
    else {
        window.innerWidth < 1087 ? document.getElementById("kart-nede-div").innerHTML =  printKartNedeStaaende() : document.getElementById("kart-nede-div").innerHTML =  printKartNedeLiggende();
    }

    let maxWidth;
    let maxHeight;
    let minWidth;
    let minHeight;

    let kart = document.getElementById("kart-oppe");
    if (etasje === "nede") {
        kart = document.getElementById("kart-nede");
        console.log(window.innerWidth);

        if (window.innerWidth < 1087) {
            maxWidth = 1440;
            maxHeight = 2592;
            minWidth = 270;
            minHeight = 480;
        } else {
            maxWidth = 2592;
            maxHeight = 1440;
            minWidth = 480;
            minHeight = 270;
        }
    } else {
        kart = document.getElementById("kart-oppe");

        if (window.innerWidth < 1087) {
            maxWidth = 1328;
            maxHeight = 2016;
            minWidth = 270;
            minHeight = 480;
        } else {
            maxWidth = 2016;
            maxHeight = 1328;
            minWidth = 480;
            minHeight = 270;
        }
    }

    let isPanning = false;
    let isZoomedOut = true;
    let startX, startY;

    let scale = 1;
    let lastScale = 1;

    // Minimum og maksimum zoom nivå
    let MAP_WIDTH = maxWidth;
    let MAP_HEIGHT = maxHeight;
    let MIN_WIDTH = minWidth;
    let MIN_HEIGHT = minHeight;

    let MID_X = maxWidth / 2;
    let MID_Y = maxHeight / 2;

    let viewBox = {x: 0, y: 0, width: MAP_WIDTH, height: MAP_HEIGHT};

    kart.setAttribute("viewBox", `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`)


    // Mouslistener som sjekker om man trykker på musa og setter startkoordinater for flytting av kartet
    kart.addEventListener("mousedown", (e) => {
        isPanning = true;
        startX = e.clientX;
        startY = e.clientY;
    });

    // Sjekker om musa holdes inne og flytter på kartet, og flytter på kartet relativt til musas koordinater
    kart.addEventListener("mousemove", (e) => {
        // Sjekker om man drar på kartet eller er zoomet helt ut
        if (!isPanning || isZoomedOut) return;

        let dx = (startX - e.clientX);
        let dy = (startY - e.clientY);

        let newX;
        let newY;

        newX = viewBox.x + dx;
        newY = viewBox.y + dy;

        // Sjekk at vi ikke beveger oss utenfor kartets grenser
        let maxX = MAP_WIDTH - viewBox.width;
        let maxY = MAP_HEIGHT - viewBox.height;



        viewBox.x = Math.max(0, Math.min(newX, maxX));
        viewBox.y = Math.max(0, Math.min(newY, maxY));

        kart.setAttribute("viewBox", `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`);

        startX = e.clientX;
        startY = e.clientY;
    });

    // Når musa ikke lenger holdes ikke flyttes ikke lenger på kartet
    window.addEventListener("mouseup", () => isPanning = false);

    // Når musehjulet rulles zoomes det inn eller ut fra musepunktet
    // Zoom kan gjøres til maksimum eller minimum zoom nivå
    kart.addEventListener("wheel", (e) => {

        e.preventDefault(); // Hindrer siden fra å rulle nedover når man ruller

        let zoomFactor = e.deltaY > 0 ? 1.05 : 0.95;  // Bestemmer zoom-hastigheten når man ruller opp og ned

        // Setter den nye bredden og høyden på kartet
        let newWidth = viewBox.width * zoomFactor;
        let newHeight = viewBox.height * zoomFactor;

        // Sjekk om vi er innenfor maks/min zoom-grenser og stopper dersom grensene overskrides
        if (newHeight > MAP_HEIGHT || newWidth > MAP_WIDTH) {
            kart.setAttribute("viewBox", `${0} ${0} ${MAP_WIDTH} ${MAP_HEIGHT}`);
            isZoomedOut = true;
            return;
        } else if (newHeight < MIN_HEIGHT || newWidth < MIN_WIDTH) {
            kart.setAttribute("viewBox", `${viewBox.x} ${viewBox.y} ${MIN_WIDTH} ${MIN_HEIGHT}`);
            return;
        }

        // Finner posisjonen på musa
        let mouseX = e.clientX / window.innerWidth * viewBox.width + viewBox.x;
        let mouseY = e.clientY / window.innerHeight * viewBox.height + viewBox.y;

        // Oppdaterer bredden og høyden på kartet til de nye verdiene
        viewBox.width = newWidth;
        viewBox.height = newHeight;

        // Setter de nye koordinatene til kartet
        viewBox.x = mouseX - (mouseX - viewBox.x) * zoomFactor;
        viewBox.y = mouseY - (mouseY - viewBox.y) * zoomFactor;

        // Sørger for at man ikke ser utenfor kartet når man zoomer ut
        if (viewBox.x < 0) viewBox.x = 0;
        if (viewBox.y < 0) viewBox.y = 0;
        if (viewBox.x + viewBox.width > MAP_WIDTH) viewBox.x = MAP_WIDTH - viewBox.width;
        if (viewBox.y + viewBox.height > MAP_HEIGHT) viewBox.y = MAP_HEIGHT - viewBox.height;

        kart.setAttribute("viewBox", `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`);
        isZoomedOut = false;
    });

    kart.addEventListener("touchstart", (e) => {
        if (e.touches.length === 1) {
            isPanning = true;
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }
        if (e.touches.length === 2) {
            const dx = e.touches[1].clientX - e.touches[0].clientX;
            const dy = e.touches[1].clientY - e.touches[0].clientY;
            lastScale = Math.sqrt(dx * dx + dy * dy);
        }
    })

    kart.addEventListener("touchend", (e) => {
        isPanning = false;
    })

    const MAX_SCALE = 1;
    const MIN_SCALE = 0.2;

    kart.addEventListener("touchmove", (e) => {
        if (e.touches.length === 2) {
            // Beregn zoom-verdien
            const dx = e.touches[1].clientX - e.touches[0].clientX;
            const dy = e.touches[1].clientY - e.touches[0].clientY;
            const currentScale = Math.sqrt(dx * dx + dy * dy);

            const zoomFactor = currentScale / lastScale;
            if (currentScale * zoomFactor < MIN_SCALE) {
                scale = MIN_SCALE;
            } else if (currentScale * zoomFactor > MAX_SCALE) {
                scale = MAX_SCALE;
            }

            // Juster viewBox for å oppnå zoom-effekten
            const newWidth = MAP_WIDTH * scale;
            const newHeight = MAP_HEIGHT * scale;

            viewBox.width = newWidth;
            viewBox.height = newHeight;

            const centerX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
            const centerY = (e.touches[0].clientY + e.touches[1].clientY) / 2;

            // Beregn hvordan viewBox skal justeres for å holde midtpunktet konstant
            const offsetX = (centerX / window.innerWidth) * (viewBox.width + viewBox.x);
            const offsetY = (centerY / window.innerHeight) * (viewBox.height + viewBox.y);

            viewBox.x = viewBox.x + offsetX;
            viewBox.y = viewBox.y + offsetY

            if (viewBox.x < 0) viewBox.x = 0;
            if (viewBox.y < 0) viewBox.y = 0;

            if (viewBox.x + viewBox.width > MAP_WIDTH) viewBox.x = MAP_WIDTH - viewBox.width;
            if (viewBox.y + viewBox.height > MAP_HEIGHT) viewBox.y = MAP_HEIGHT - viewBox.height;

            kart.setAttribute("viewBox", `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`);

            lastScale = currentScale;
        } else if (e.touches.length === 1 && isPanning) {
            // Dra
            let dx = (startX - e.touches[0].clientX);
            let dy = (startY - e.touches[0].clientY);

            let newX = viewBox.x + dx;
            let newY = viewBox.y + dy;

            // Sjekk at vi ikke beveger oss utenfor kartets grenser
            let maxX = MAP_WIDTH - viewBox.width;
            let maxY = MAP_HEIGHT - viewBox.height;

            viewBox.x = Math.max(0, Math.min(newX, maxX));
            viewBox.y = Math.max(0, Math.min(newY, maxY));

            kart.setAttribute("viewBox", `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`);

            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }
    })
    let zoomInnKnapp = document.getElementById("zoom-inn-knapp-" + etasje);
    zoomInnKnapp.addEventListener("click", (e) => {
        let zoomFactor = 0.8;   // Hvor mye som zoomes inn hver gang knappen trykkes på

        const {box, zoom} = handleZoom(viewBox, zoomFactor, MAP_WIDTH, MAP_HEIGHT, MIN_WIDTH, MIN_HEIGHT);
        viewBox = box;
        isZoomedOut = zoom;

        // Lager en behagelig animasjon av at det zoomes
        gsap.to(kart, {
            attr: {viewBox: `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`},
            duration: 0.3,
            ease: "power2.out",
        });
    });

    let zoomUtKnapp = document.getElementById("zoom-ut-knapp-" + etasje);
    zoomUtKnapp.addEventListener("click", (e) => {
        let zoomFactor = 1.2;

        const {box, zoom} = handleZoom(viewBox, zoomFactor, MAP_WIDTH, MAP_HEIGHT, MIN_WIDTH, MIN_HEIGHT);
        viewBox = box;
        isZoomedOut = zoom;

        gsap.to(kart, {
            attr: {viewBox: `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`},
            duration: 0.3,
            ease: "power2.out",
        });
    });
    let resetZoomKnapp = document.getElementById("reset-zoom-knapp-" + etasje);
    resetZoomKnapp.addEventListener("click", (e) => {

        // Må oppdatere viewBox-parametrene så den husker at man er zoomet helt ut
        viewBox.x = 0;
        viewBox.y = 0;
        viewBox.width = MAP_WIDTH;
        viewBox.height = MAP_HEIGHT;

        isZoomedOut = true;
        
        gsap.to(kart, {
            attr: {viewBox: `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`},
            duration: 0.3,
            ease: "power2.out",
        });
    })

    // Når man trykker på en bod åpnes en popup som viser informasjon om boden
    kart.addEventListener("click", function (e) {
        let bod = e.target.id;
        if (document.getElementById(bod) === null || isPanning) return;
        console.log(bod);

        popup(bod, etasje);
    })

    function visIKart(){
        viewBox.x = 0;
        viewBox.y = 0;
        viewBox.width = MAP_WIDTH;
        viewBox.height = MAP_HEIGHT;
        console.log(viewBox.width, viewBox.height)
        isZoomedOut = true;
        kart = document.getElementById("kart-oppe")
        kart.setAttribute("viewBox", `${viewBox.x} ${viewBox.y} ${2016} ${1328}`)
        kart = document.getElementById("kart-nede")
        kart.setAttribute("viewBox", `${viewBox.x} ${viewBox.y} ${2592} ${1440}`)
        lukkPopup();
    }
    window.visIKart = visIKart;
}

// Håndterer zoom når man trykker på zoom-knappene på kartet
//
// Parametre:
//  viewBox - den nåværnde zoomen til kartet
//  zoomFactor - mengden som skal zoomes inn
//  MAP_WIDTH - bredden på kartet helt zoomet ut
//  MAP_HEIGHT - høyden på kartet helt zoomet ut
//  MIN_WIDTH - bredden på kartet helt zoomet inn
//  MIN-HEIGHT - høyden på kartet helt zoomet inn
//
// Returnerer:
//  viewBox - oppdatert med zoomet inn verdier
function handleZoom(viewBox, zoomFactor, MAP_WIDTH, MAP_HEIGHT, MIN_WIDTH, MIN_HEIGHT) {
    console.log("HandleZoom")

    // Setter den nye bredden og høyden på kartet
    let newWidth = viewBox.width * zoomFactor;
    let newHeight = viewBox.height * zoomFactor;

    // Sjekk om vi er innenfor maks/min zoom-grenser og stopper dersom grensene overskrides
    if (newHeight > MAP_HEIGHT || newWidth > MAP_WIDTH) {
        viewBox = {x: 0, y: 0, width: MAP_WIDTH, height: MAP_HEIGHT};
        return {
            box: viewBox,
            zoom: true
        };
    } else if (newHeight < MIN_HEIGHT || newWidth < MIN_WIDTH) {
        viewBox.width = MIN_WIDTH;
        viewBox.height = MIN_HEIGHT;
        return {
            box: viewBox,
            zoom: false
        }
    }

    // Finner midtpunktet av kartet
    let centerX = viewBox.x + viewBox.width / 2;
    let centerY = viewBox.y + viewBox.height / 2;

    // Oppdaterer bredden og høyden på kartet til den nye bredden
    viewBox.width = newWidth;
    viewBox.height = newHeight;

    // Setter koordinatene for kartet zoomet inn
    viewBox.x = centerX - viewBox.width / 2;
    viewBox.y = centerY - viewBox.height / 2;

    // Sørger for at man ikke ser utenfor kartet når man zoomer ut
    if (viewBox.x < 0) viewBox.x = 0;
    if (viewBox.y < 0) viewBox.y = 0;
    if (viewBox.x + viewBox.width > MAP_WIDTH) viewBox.x = MAP_WIDTH - viewBox.width;
    if (viewBox.y + viewBox.height > MAP_HEIGHT) viewBox.y = MAP_HEIGHT - viewBox.height;

    return {
        box: viewBox,
        zoom: false
    };
}

//Popup boks med info om boden som ble trykket på
function popup(bod, etasjeVar){
    console.log(etasjeVar)
    document.getElementById(bod).classList.remove("highlight-bod-i-kart"); //Fjerner highlight til boden som ble trykket på hvis brukeren har trykket på "Vis i kart" knappen i tabellen
    const idPopup = "popup-box-"+etasjeVar;
    console.log(idPopup)
    let popupBox;
    if (bod === "kart-oppe" || bod === "kart-nede") return; //Hvis bruker ikke trykker på noen av bodene, altså bakgrunnen, vil denne funksjonen lukkes
    if (bod === "9" || bod === "305") { //Spesielle boder som ikke kan leies
        popupBox = `
                <div class="popup-container">
                    <h1>Bod ${bod}</h1>
                    <p>Denne boden er ikke tilgjengelig for utleie</p>
                    <button class="close-btn" onclick="lukkPopup()">Close</button>
                </div>
            `;

        //Pusher ut html koden for popup-boks til en div som ligger i kart.html
        document.getElementById(idPopup).innerHTML = popupBox;
        document.getElementById(idPopup).classList.add("show");
        return;
    }

    let bodObjekt = bodArray.find(boderObjekt => boderObjekt.nr === parseInt(bod, 10)); //Finner bod objektet for boden som ble trykket på i listen med alle boder
    let klasseObjekt = klasseArray.find(klasserObjekt => klasserObjekt.nr === parseInt(bodObjekt.klasseNr, 10)); //Finner klasse objektet for klassen boden som ble trykket på er i.

    //Sjekker om en bod er opptatt eller ikke
    let bodOpptatt = "";
    if (bodObjekt.opptatt){bodOpptatt = "opptatt";}
    else{bodOpptatt = "ledig";}

    //Sjekker hvilken etasje boden befinner seg i
    let etasje = "";
    if (bodObjekt.etasje === 1){etasje = "Oppe";}
    else{etasje = "Nede";}

    //HTML koden for popup-boks
    popupBox = `
                <div class="popup-container">
                    <h1>Bod ${bod}</h1>
                    <p>Areal: ${klasseObjekt.areal}m²</p>
                    <p>Volum: ${klasseObjekt.volum}m³</p>
                    <p>Pris: ${klasseObjekt.pris}kr</p>
                    <p>Etasje: ${etasje}</p>
                    <p>Denne boden er ${bodOpptatt}</p>
                    <button class="close-btn" onclick="lukkPopup()">Close</button>
                </div>
            `;

    //Pusher ut html koden for popup-boks til en div som ligger i kart.html
    document.getElementById(idPopup).innerHTML = popupBox;
    document.getElementById(idPopup).classList.add("show");
}


//Lukke popup boksen til boden
function lukkPopup(){
    document.getElementById("popup-box-oppe").classList.remove("show");
    document.getElementById("popup-box-nede").classList.remove("show");
}

window.lukkPopup = lukkPopup;   // Gjør funksjonen globalt tilgjengelig




