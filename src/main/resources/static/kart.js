window.onload = function hentBoder() {
    $.get("http://localhost:8080/hentBoder", function(boder) {
        console.log(boder);
        for (const bod of boder) {
            if (bod.nr === 9 || bod.nr === 305) continue;
            let kartBod = document.getElementById(bod.nr);
            if (kartBod != null) {
                kartBod.setAttribute("fill", bod.opptatt ? "#d06a6a" : "#71bd6d");
            }
        }
    })
}

function remToPixle(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

document.addEventListener("DOMContentLoaded", () => {
    let kart = document.getElementById("kart-oppe");

    let remWidth = remToPixle(126); // 2016
    let remHeight = remToPixle(83)  // 1328

    console.log(remWidth);
    console.log(remHeight);


    let isPanning = false;
    let startX, startY;

    // Minimum og maksimum zoom nivå
    const MAP_WIDTH = remWidth;
    const MAP_HEIGHT = remHeight;
    const MIN_WIDTH = 480;
    const MIN_HEIGHT = 270;

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

    const kartSize = {width: kart.clientWidth, height: kart.clientHeight};
    let startPoint = {x: 0, y: 0};
    let endPoint = {x: 0, y: 0};
    let scale = 1;

    // Når musehjulet rulles zoomes det inn eller ut fra musepunktet
    // Zoom kan gjøres til maksimum eller minimum zoom nivå
    kart.addEventListener("wheel", (e) => {

        e.preventDefault(); // Hindrer siden fra å rulle nedover når man ruller

        let zoomFactor = e.deltaY > 0 ? 1.1 : 0.9;  // Bestemmer zoom-hastigheten når man ruller opp og ned

        let newWidth = viewBox.width * zoomFactor;
        let newHeight = viewBox.height * zoomFactor;

        // Sjekk om vi er innenfor maks/min zoom-grenser
        if (newWidth > MAP_WIDTH || newWidth < MIN_WIDTH || newHeight > MAP_HEIGHT || newHeight < MIN_HEIGHT) {
            kart.setAttribute("viewBox", `${0} ${0} ${MAP_WIDTH} ${MAP_HEIGHT}`);
            return;
        }

        let mouseX = e.clientX / window.innerWidth * viewBox.width + viewBox.x;
        let mouseY = e.clientY / window.innerHeight * viewBox.height + viewBox.y;

        viewBox.width = newWidth;
        viewBox.height = newHeight;

        viewBox.x = mouseX - (mouseX - viewBox.x) * zoomFactor;
        viewBox.y = mouseY - (mouseY - viewBox.y) * zoomFactor;

        kart.setAttribute("viewBox", `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`);
    });

    // Holder boden som er fokusert
    let aktivBod = null;

    document.getElementById("kart-oppe").addEventListener("click", function (e) {
        let bod = e.target.id;
        if (document.getElementById(bod) === null) return;
        console.log(bod);

        if (bod === "kart-oppe") {
            document.getElementById(aktivBod).setAttribute("stroke", "black")
            document.getElementById(aktivBod).setAttribute("stroke-width", "2");
            return;
        }

        if (aktivBod !== null && aktivBod !== bod) {
            document.getElementById(aktivBod).setAttribute("stroke", "black")
            document.getElementById(aktivBod).setAttribute("stroke-width", "2");
        }

        aktivBod = bod;
        document.getElementById(bod).setAttribute("stroke", "#57B9FF");
        document.getElementById(bod).setAttribute("stroke-width", "7");

        popup(bod);
    })
});


document.addEventListener("DOMContentLoaded", () => {
    let kart = document.getElementById("kart-nede");

    let remWidth = remToPixle(45); // 2016
    let remHeight = remToPixle(81)  // 1328

    console.log(remWidth);
    console.log(remHeight);


    let isPanning = false;
    let startX, startY;

    // Minimum og maksimum zoom nivå
    const MAP_WIDTH = remWidth;
    const MAP_HEIGHT = remHeight;
    const MIN_WIDTH = 480;
    const MIN_HEIGHT = 270;

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

    const kartSize = {width: kart.clientWidth, height: kart.clientHeight};
    let startPoint = {x: 0, y: 0};
    let endPoint = {x: 0, y: 0};
    let scale = 1;

    // Når musehjulet rulles zoomes det inn eller ut fra musepunktet
    // Zoom kan gjøres til maksimum eller minimum zoom nivå
    kart.addEventListener("wheel", (e) => {

        e.preventDefault(); // Hindrer siden fra å rulle nedover når man ruller

        let zoomFactor = e.deltaY > 0 ? 1.1 : 0.9;  // Bestemmer zoom-hastigheten når man ruller opp og ned

        let newWidth = viewBox.width * zoomFactor;
        let newHeight = viewBox.height * zoomFactor;

        // Sjekk om vi er innenfor maks/min zoom-grenser
        if (newWidth > MAP_WIDTH || newWidth < MIN_WIDTH || newHeight > MAP_HEIGHT || newHeight < MIN_HEIGHT) {
            kart.setAttribute("viewBox", `${0} ${0} ${MAP_WIDTH} ${MAP_HEIGHT}`);
            return;
        }

        let mouseX = e.clientX / window.innerWidth * viewBox.width + viewBox.x;
        let mouseY = e.clientY / window.innerHeight * viewBox.height + viewBox.y;

        viewBox.width = newWidth;
        viewBox.height = newHeight;

        viewBox.x = mouseX - (mouseX - viewBox.x) * zoomFactor;
        viewBox.y = mouseY - (mouseY - viewBox.y) * zoomFactor;

        kart.setAttribute("viewBox", `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`);
    });

    // Holder boden som er fokusert
    let aktivBod = null;

    document.getElementById("kart-nede").addEventListener("click", function (e) {
        let bod = e.target.id;
        if (document.getElementById(bod) === null) return;
        console.log(bod);

        if (bod === "kart-nede") {
            document.getElementById(aktivBod).setAttribute("stroke", "black")
            document.getElementById(aktivBod).setAttribute("stroke-width", "2");
            return;
        }

        if (aktivBod !== null && aktivBod !== bod) {
            document.getElementById(aktivBod).setAttribute("stroke", "black")
            document.getElementById(aktivBod).setAttribute("stroke-width", "2");
        }

        aktivBod = bod;
        document.getElementById(bod).setAttribute("stroke", "#57B9FF");
        document.getElementById(bod).setAttribute("stroke-width", "7");

        popup(bod);
    })
});


function popup(bod){

    //Kaller på to get api kallinger rett etter hverandre
    $.when(
        $.get("http://localhost:8080/hentBoder"),
        $.get("http://localhost:8080/hentKlasser")
    ).done(function(boder, klasser) {
        let bodObjekt = boder[0].find(boderObjekt => boderObjekt.nr === parseInt(bod, 10)); //Finner bod objektet for boden som ble trykket på i listen med alle boder
        let klasseObjekt = klasser[0].find(klasserObjekt => klasserObjekt.nr === parseInt(bodObjekt.klasseNr, 10)); //Finner klasse objektet for klassen boden som ble trykket på er i.
        
        let bodOpptatt = "";
        if (bodObjekt.opptatt){bodOpptatt = "opptatt";}
        else{bodOpptatt = "ledig";}
        let etasje = "";
        if (bodObjekt.etasje === 1){etasje = "Oppe";}
        else{etasje = "Nede";}

        //HTML koden for popup-boks
        let popupBox = `
                <div class="popup-container">
                    <h1>Bod ${bod}</h1>
                    <p>Areal: ${klasseObjekt.areal}m²</p>
                    <p>Volum: ${klasseObjekt.volum}m³</p>
                    <p>Pris: ${klasseObjekt.pris}kr</p>
                    <p>Etasje: ${etasje}</p>
                    <p>Denne boden er ${bodOpptatt}</p>
                    <button class="close-btn" onclick="lukkPopup()">Close</button>
                </div>
            `

            //Pusher ut html koden for popup-boks til en div som ligger i kart.html
            document.getElementById("popup-box").innerHTML = popupBox;
            document.getElementById("popup-box").style.display = "flex";
    });

}

function lukkPopup(){
    document.getElementById("popup-box").style.display = "none";
}

















