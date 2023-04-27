window.onload = rightArrow;
let myBelt = ['enoki', 'oyster','portabella', 'shiitake', 'button'];
let myPlates = ['enokiPlate', 'oysterPlate','portabellaPlate', 'shiitakePlate', 'buttonPlate'];
let myMiniPlates = ['enokiMiniPlate', 'oysterMiniPlate','portabellaMiniPlate', 'shiitakeMiniPlate', 'buttonMiniPlate'];
let mySites = ['enoki.html', 'oyster.html','portabella.html', 'shiitake.html', 'button.html'];
let currentPos = 4;
var fileName = location.pathname.split("/").slice(-1);

function hideAll() {
    for ( i = 0; i < myBelt.length; i++) {
        document.getElementById(myBelt[i]).classList.add('hidden');
    }
}

function hideAllPlates() {
    for ( i = 0; i < myPlates.length; i++) {
        document.getElementById(myPlates[i]).classList.add('hidden');
    }
}

function showAll() {
    for ( i = 0; i < myBelt.length; i++) {
        document.getElementById(myMiniPlates[i]).classList.remove('hidden');
    }
}

function plateAction() {
    hideAllPlates();
    showAll();
    document.getElementById(myPlates[currentPos]).classList.remove('hidden');
    document.getElementById(myMiniPlates[currentPos]).classList.add('hidden');
}

function rightArrow() {
    toggleBelt("right");
    hideAll();
    document.getElementById(myBelt[currentPos]).classList.remove('hidden');
    plateAction();
}

function leftArrow() {
    toggleBelt("left");
    hideAll();
    document.getElementById(myBelt[currentPos]).classList.remove('hidden');
    plateAction();
}

function exploreButton() {
    window.location.href = mySites[currentPos];
}

document.getElementById('right').onclick = rightArrow;
document.getElementById('left').onclick = leftArrow;
document.getElementById('explore_button').onclick = exploreButton;

function toggleBelt(direction) {
    if (direction == "left") {
        if (currentPos == 0) {
            currentPos = 4;
            return currentPos;
        }
        currentPos--;
        return currentPos;

    } else {
        if (currentPos == 4) {
            currentPos = 0;
            return currentPos;
        }
        currentPos++;
        return currentPos;
    }
}
