function averageThreeNumbers(x, y, z) {
    let sum = x + y + z;
    let factor = 3;
    return Math.floor(sum / factor);
}

function createSentence(num, noun) {
    let toReturn = "On average, a Berkeley student has " + num + " " + noun + "s";
    return toReturn;
}

function getRandomNum(max) {
    return Math.floor(Math.random() * max);
}

let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);

let avg = averageThreeNumbers(x, y, z);

let sentence = createSentence(avg, "cat");

console.log(sentence);