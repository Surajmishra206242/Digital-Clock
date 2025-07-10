setInterval(myfun, 1000);

function myfun() {
    let date = new Date();
    let time = date.toLocaleTimeString();//this will set time according to your device
    document.getElementById("time").innerHTML = time;
}
