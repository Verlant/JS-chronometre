let span_heure = document.getElementById("heure"),
  span_minute = document.getElementById("minute"),
  span_seconde = document.getElementById("seconde"),
  span_milliseconde = document.getElementById("milliseconde");
let milliseconde = 0,
  seconde = 0,
  minute = 0,
  heure = 0;
let INTERVAL_update_chrono_ID;

function update_chrono() {
  span_milliseconde.textContent = milliseconde + " ms";
  milliseconde += 100;
  if (milliseconde >= 1000) {
    milliseconde = 0;
    seconde++;
    span_seconde.textContent = seconde + " s";
  } else if (seconde >= 60) {
    seconde = 0;
    minute++;
    span_minute.textContent = minute + " min";
  } else if (minute >= 60) {
    minute = 0;
    heure++;
    span_heure.textContent = heure + " h";
  }
}

function start() {
  INTERVAL_update_chrono_ID = setInterval(update_chrono, 100);
}

function stop() {
  clearInterval(INTERVAL_update_chrono_ID);
  INTERVAL_update_chrono_ID = null;
}

function reset() {
  stop();
  milliseconde = 0;
  seconde = 0;
  minute = 0;
  heure = 0;
  span_milliseconde.textContent = milliseconde + " ms";
  span_seconde.textContent = seconde + " s";
  span_minute.textContent = minute + " min";
  span_heure.textContent = heure + " h";
}
