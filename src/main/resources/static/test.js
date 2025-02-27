window.onload = function hentBoder() {
    $.get("http://localhost:8080/hentBoder", function(boder) {
        console.log(boder);
        for (const bod of boder) {
            let kartBod = document.getElementById(bod.nr);
            if (kartBod != null) {
                let background = kartBod.querySelector("rect");
                background.setAttribute("fill", bod.opptatt ? "red" : "green");
                background.setAttribute("opacity", bod.opptatt ? "50%" : "35%");
            }
        }
    })
}


// function hentBoder() {
//     $.get("http://localhost:8080/hentBoder", function(boder) {
//         console.log(boder);
//     })
//         .fail(function() {
//             console.log("Kunne ikke hente boder");
//         })
// }

function hentKategorier() {
    $.get("http://localhost:8080/hentKategorier"), function(data) {
        return data;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let svg = document.getElementById("kart");
    let viewBox = {x: 0, y: 0, width: 1920, height: 1080};
    let isPanning = false, startX, startY;

    svg.addEventListener("mousedown", (e) => {
        isPanning = true;
        startX = e.clientX;
        startY = e.clientY;
    });

    window.addEventListener("mousemove", (e) => {
        if (!isPanning) return;
        let dx = (startX - e.clientX) * (viewBox.width / window.innerWidth);
        let dy = (startY - e.clientY) * (viewBox.height / window.innerHeight);
        viewBox.x += dx;
        viewBox.y += dy;
        svg.setAttribute("viewBox", `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`);
        startX = e.clientX;
        startY = e.clientY;
    });

    window.addEventListener("mouseup", () => isPanning = false);

    svg.addEventListener("wheel", (e) => {
        e.preventDefault();
        let zoomFactor = e.deltaY > 0 ? 1.1 : 0.9;

        let mouseX = e.clientX / window.innerWidth * viewBox.width + viewBox.x;
        let mouseY = e.clientY / window.innerHeight * viewBox.height + viewBox.y;

        viewBox.width *= zoomFactor;
        viewBox.height *= zoomFactor;

        viewBox.x = mouseX - (mouseX - viewBox.x) * zoomFactor;
        viewBox.y = mouseY - (mouseY - viewBox.y) * zoomFactor;

        svg.setAttribute("viewBox", `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`);
    });
});




























