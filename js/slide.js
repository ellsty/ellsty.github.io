
function out(destination) {
    function newdest() {
        location.href=destination;
    }

    document.getElementById("content").classList.add("out");
    document.getElementById("runner").classList.add("out");
    setTimeout(newdest, 300);
}

function pagereset() {
    document.getElementById("content").classList.remove("out");
    document.getElementById("runner").classList.remove("out");
}

window.addEventListener('pageshow', pagereset);