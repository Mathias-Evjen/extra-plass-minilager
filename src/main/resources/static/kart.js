src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"


const bodArray = [];
const klasseArray = [];

window.onload = function hentBoder() {
    $.get("http://localhost:8080/hentBoder", function(boder) {
        console.log(boder);
        for (const bod of boder) {
            if (bod.nr === 9 || bod.nr === 305) continue;
            let kartBod = document.getElementById(bod.nr);
            if (kartBod != null) {
                kartBod.setAttribute("fill", bod.opptatt ? "#d06a6a" : "#71bd6d");
            }
            bodArray.push(bod);
        }
    })

    $.get("http://localhost:8080/hentKlasser", function (klasser) {
        for (const klasse of klasser) {
            klasseArray.push(klasse);
        }
    })
}

function remToPixle(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

document.addEventListener("DOMContentLoaded", () => {
    let remWidth;
    let remHeight;

    let minWidth;
    let minHeight;

    let kart = document.getElementById("kart-oppe");
    if (kart === null) {
        kart = document.getElementById("kart-nede");

        remWidth = remToPixle(45); // 2016
        remHeight = remToPixle(81)  // 1328
        minWidth = 270;
        minHeight = 480;


    } else {
        remWidth = remToPixle(126); // 2016
        remHeight = remToPixle(83)  // 1328

        minWidth = 480;
        minHeight = 270;
    }
    console.log(kart);

    console.log(remWidth);
    console.log(remHeight);


    let isPanning = false;
    let startX, startY;

    // Minimum og maksimum zoom nivå
    const MAP_WIDTH = remWidth;
    const MAP_HEIGHT = remHeight;

    const MIN_WIDTH = minWidth;
    const MIN_HEIGHT = minHeight;

    const MID_X = remWidth / 2;
    const MID_Y = remHeight / 2;

    let viewBox = {x: 0, y: 0, width: MAP_WIDTH, height: MAP_HEIGHT};
    kart.setAttribute("viewBox", `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`)


    // Mouslistener som sjekker om man trykker på musa og setter startkoordinater for flytting av kartet
    kart.addEventListener("mousedown", (e) => {
        isPanning = true;
        startX = e.clientX;
        startY = e.clientY;
    });

    // Sjekker om musa holdes inne og flytter på kartet, og flytter på kartet relativt til musas koordinater
    window.addEventListener("mousemove", (e) => {
        if (!isPanning) return;

        let dx = (startX - e.clientX);
        let dy = (startY - e.clientY);

        let newX = viewBox.x + dx;
        let newY = viewBox.y + dy;

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

        let zoomFactor = e.deltaY > 0 ? 1.2 : 0.8;  // Bestemmer zoom-hastigheten når man ruller opp og ned

        let newWidth = viewBox.width * zoomFactor;
        let newHeight = viewBox.height * zoomFactor;

        // Sjekk om vi er innenfor maks/min zoom-grenser
        if (newHeight > MAP_HEIGHT || newWidth > MAP_WIDTH) {
            kart.setAttribute("viewBox", `${0} ${0} ${MAP_WIDTH} ${MAP_HEIGHT}`);
            return;
        } else if (newHeight < MIN_HEIGHT || newWidth < MIN_WIDTH) {
            kart.setAttribute("viewBox", `${viewBox.x} ${viewBox.y} ${MIN_WIDTH} ${MIN_HEIGHT}`);
            return;
        }

        let mouseX = e.clientX / window.innerWidth * viewBox.width + viewBox.x;
        let mouseY = e.clientY / window.innerHeight * viewBox.height + viewBox.y;

        viewBox.width = newWidth;
        viewBox.height = newHeight;

        viewBox.x = mouseX - (mouseX - viewBox.x) * zoomFactor;
        viewBox.y = mouseY - (mouseY - viewBox.y) * zoomFactor;

        // Sørger for at man ikke ser utenfor kartet når man zoomer ut
        if (viewBox.x < 0) viewBox.x = 0;
        if (viewBox.y < 0) viewBox.y = 0;

        if (viewBox.x + viewBox.width > MAP_WIDTH) viewBox.x = MAP_WIDTH - viewBox.width;
        if (viewBox.y + viewBox.height > MAP_HEIGHT) viewBox.y = MAP_HEIGHT - viewBox.height;

        kart.setAttribute("viewBox", `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`);
    });

    let zoomInnKnapp = document.getElementById("zoom-inn-knapp");
    zoomInnKnapp.addEventListener("click", function (e) {
        let zoomFactor = 0.8;

        let newWidth = viewBox.width * zoomFactor;
        let newHeight = viewBox.height * zoomFactor;

        // Sjekk om vi er innenfor maks/min zoom-grenser
        if (newHeight > MAP_HEIGHT || newWidth > MAP_WIDTH) {
            kart.setAttribute("viewBox", `${0} ${0} ${MAP_WIDTH} ${MAP_HEIGHT}`);
            return;
        } else if (newHeight < MIN_HEIGHT || newWidth < MIN_WIDTH) {
            kart.setAttribute("viewBox", `${viewBox.x} ${viewBox.y} ${MIN_WIDTH} ${MIN_HEIGHT}`);
            return;
        }

        let centerX = viewBox.x + viewBox.width / 2;
        let centerY = viewBox.y + viewBox.height / 2;

        viewBox.width = newWidth;
        viewBox.height = newHeight;

        viewBox.x = centerX - viewBox.width / 2;
        viewBox.y = centerY - viewBox.height / 2;

        // Sørger for at man ikke ser utenfor kartet når man zoomer ut
        if (viewBox.x < 0) viewBox.x = 0;
        if (viewBox.y < 0) viewBox.y = 0;

        if (viewBox.x + viewBox.width > MAP_WIDTH) viewBox.x = MAP_WIDTH - viewBox.width;
        if (viewBox.y + viewBox.height > MAP_HEIGHT) viewBox.y = MAP_HEIGHT - viewBox.height;

        gsap.to(kart, {
            attr: {viewBox: `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`},
            duration: 0.3,
            ease: "power2.out",
        });
    });

    let zoomUtKnapp = document.getElementById("zoom-ut-knapp");
    zoomUtKnapp.addEventListener("click", function (e) {
        let zoomFactor = 1.2;

        let newWidth = viewBox.width * zoomFactor;
        let newHeight = viewBox.height * zoomFactor;

        // Sjekk om vi er innenfor maks/min zoom-grenser
        if (newHeight > MAP_HEIGHT || newWidth > MAP_WIDTH) {
            kart.setAttribute("viewBox", `${0} ${0} ${MAP_WIDTH} ${MAP_HEIGHT}`);
            return;
        } else if (newHeight < MIN_HEIGHT || newWidth < MIN_WIDTH) {
            kart.setAttribute("viewBox", `${viewBox.x} ${viewBox.y} ${MIN_WIDTH} ${MIN_HEIGHT}`);
            return;
        }

        let centerX = viewBox.x + viewBox.width / 2;
        let centerY = viewBox.y + viewBox.height / 2;

        viewBox.width = newWidth;
        viewBox.height = newHeight;

        viewBox.x = centerX - viewBox.width / 2;
        viewBox.y = centerY - viewBox.height / 2;

        // Sørger for at man ikke ser utenfor kartet når man zoomer ut
        if (viewBox.x < 0) viewBox.x = 0;
        if (viewBox.y < 0) viewBox.y = 0;

        if (viewBox.x + viewBox.width > MAP_WIDTH) viewBox.x = MAP_WIDTH - viewBox.width;
        if (viewBox.y + viewBox.height > MAP_HEIGHT) viewBox.y = MAP_HEIGHT - viewBox.height;

        gsap.to(kart, {
            attr: {viewBox: `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`},
            duration: 0.3,
            ease: "power2.out",
        });
    });

    let resetZoomKnapp = document.getElementById("reset-zoom-knapp");
    resetZoomKnapp.addEventListener("click", function (e) {

        // Må oppdatere viewBox-parametrene så den husker at man er zoomet helt ut
        viewBox.x = 0;
        viewBox.y = 0;
        viewBox.width = MAP_WIDTH;
        viewBox.height = MAP_HEIGHT;

        gsap.to(kart, {
            attr: {viewBox: `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`},
            duration: 0.3,
            ease: "power2.out",
        });
    })

    // Når man trykker på en bod åpnes en popup som viser informasjon om boden
    kart.addEventListener("click", function (e) {
        let bod = e.target.id;
        if (document.getElementById(bod) === null) return;
        console.log(bod);

        popup(bod);
    })
});

function popup(bod){
    let popupBox;
    if (bod === "kart-oppe" || bod === "kart-nede") return;
    if (bod === "9" || bod === "305") {
        popupBox = `
                <div class="popup-container">
                    <h1>Bod ${bod}</h1>
                    <p>Denne boden er ikke tilgjengelig for utleie</p>
                    <button class="close-btn" onclick="lukkPopup()">Close</button>
                </div>
            `;

        //Pusher ut html koden for popup-boks til en div som ligger i kart.html
        document.getElementById("popup-box").innerHTML = popupBox;
        document.getElementById("popup-box").classList.add("show");
        return;
    }

    let bodObjekt = bodArray.find(boderObjekt => boderObjekt.nr === parseInt(bod, 10)); //Finner bod objektet for boden som ble trykket på i listen med alle boder
    let klasseObjekt = klasseArray.find(klasserObjekt => klasserObjekt.nr === parseInt(bodObjekt.klasseNr, 10)); //Finner klasse objektet for klassen boden som ble trykket på er i.

    let bodOpptatt = "";
    if (bodObjekt.opptatt){bodOpptatt = "opptatt";}
    else{bodOpptatt = "ledig";}
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
    document.getElementById("popup-box").innerHTML = popupBox;
    document.getElementById("popup-box").classList.add("show")

}

function lukkPopup(){
    document.getElementById("popup-box").classList.remove("show");
}










