let counter = 0;

function count() {
  counter++;
  document.getElementById('counter').innerHTML = counter;
}

function reset() {
  document.getElementById('counter').innerHTML = 0;
  counter = 0;
}


