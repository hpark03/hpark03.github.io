window.onload = enlargeSelect;
var myFloats = ['enokiFloat', 'oysterFloat','portabellaFloat', 'shiitakeFloat', 'buttonFloat'];
var pos = 0;

function enlargeSelect() {
    var fileName = location.pathname.split("/").slice(-1);
    if (fileName == "button.html") {
        pos = 4;
    }
    if (fileName == "oyster.html") {
        pos = 1;
    }
    if (fileName == "portabella.html") {
        pos = 2;
    }
    if (fileName == "shiitake.html") {
        pos = 3;
    }
    document.getElementById(myFloats[pos]).classList.add('enlarge');
}