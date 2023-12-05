var counter = 0;
function incrementCounter() {
    counter++;
    document.getElementById('counter').innerText = counter;
}
setInterval(incrementCounter, 1000);
