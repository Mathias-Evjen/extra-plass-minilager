src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"

function hentBoder() {
    $.get("http://localhost:8080/hentBoder", function(boder) {
        console.log(boder);
    })
        .fail(function() {
            console.log("Kunne ikke hente boder");
        })
}

function hentOpptatt() {
    $.get("http://localhost:8080/hentOpptatt", function(opptatt) {
        console.log(opptatt);
    })
}