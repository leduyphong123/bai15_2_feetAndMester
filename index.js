let feet = prompt("nhap vao feet:");
let meters = prompt("nhap vao mesters:");

// let showMeter = footToMeter(feet);
// let showFeet = meterToFoot(meters);
// document.write("feet to meters =" + showMeter + "<br/>");
// document.write("meters to feet =" + showFeet);
footToMeter(feet);
meterToFoot(meters);

function footToMeter(foot) {
    let meter = 0.305 * foot;
    document.write("feet to meters =" + meter + "<br/>");

}

function meterToFoot(meter) {
    let foot = 3.279 * meter;
    document.write("meters to feet =" + foot);

}