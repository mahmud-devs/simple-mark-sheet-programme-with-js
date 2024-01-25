/*====================================

    mark sheet

=====================================*/

let input = prompt("Enter your mark");
let markInput = +input;

if (markInput >= 90 && markInput <= 100) {
    console.log("You have received S grade");
} else if (markInput < 90 && markInput >= 80) {
    console.log("You have received A grade");
} else if (markInput < 80 && markInput >= 70) {
    console.log("You have received B grade");
} else if (markInput < 70 && markInput >= 60) {
    console.log("You have received C grade");
} else if (markInput < 60 && markInput >= 50) {
    console.log("You have received D grade");
} else if (markInput < 50 && markInput >= 40) {
    console.log("You have received C grade");
} else if (markInput < 40 && markInput >= 0) {
    console.log("You have failed");
} else {
    console.log("Invalid input");
}
