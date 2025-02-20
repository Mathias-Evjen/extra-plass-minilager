src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"

function hentBoder() {
    $.get("http://localhost:8080/hentBoder", function(boder) {
        console.log(boder);
    })
        .fail(function() {
            console.log("Kunne ikke hente boder");
        })
}

let width = [1.4,4,0,3,8, 5,4,6,2, 6, 2, 6, 3, 3]
let height = [1.25, ];