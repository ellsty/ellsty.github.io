function magnify(artwork) {

    if (document.getElementById("glass").style.display == "block") {
        document.getElementById("glass").classList.remove("in");
        document.getElementById("glass").style.display = "none";
    }
    else {
        document.getElementById("glass").style.backgroundImage = 'url(' + artwork + ')';
        document.getElementById("glass").style.display = "block";
        document.getElementById("glass").classList.add("in");
    }

}