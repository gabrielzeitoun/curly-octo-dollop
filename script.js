function scrolldiv(name) {
    document.getElementById(name).scrollIntoView();
}

function scrolltop() {
    window.scrollTo(0, 0);
}

function toss() {
    const rand = Math.random() < 0.5
    const output_destination = document.getElementById("coin-tosser-result");
    if (rand) {
        output_destination.innerText = 'heads';
    } else {
        output_destination.innerText = 'tails';
    }
}