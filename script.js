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
        heads_count = document.getElementById('heads-count').innerText
        document.getElementById('heads-count').innerText = parseInt(heads_count) + 1;
    } else {
        output_destination.innerText = 'tails';
        tails_count = document.getElementById('tails-count').innerText
        document.getElementById('tails-count').innerText = parseInt(tails_count) + 1;
    }

    if (parseInt(heads_count) + parseInt(tails_count) === 48) {
        alert('ok, maybe you should slow down there');
    }
}

function reset() {
    const output_destination = document.getElementById("coin-tosser-result");
    output_destination.innerText = '^ click to start ^';
    heads_count = document.getElementById('heads-count').innerText
    document.getElementById('heads-count').innerText = 0;
    tails_count = document.getElementById('tails-count').innerText
    document.getElementById('tails-count').innerText = 0;
}

function updateTime() {
    const now = new Date();
    const options = {
      timeZone: 'Australia/Sydney',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit', 
      second: '2-digit'
    };
    const timeString = now.toLocaleTimeString('en-US', options);
    document.getElementById('clock').innerText = "CURRENT TIME (SYD): " + timeString;
  }
  setInterval(updateTime, 1000);