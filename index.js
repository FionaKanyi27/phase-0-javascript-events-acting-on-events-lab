const dodger = document.getElementById("dodger");

// Set initial position for the dodger
dodger.style.left = "50%"; // Starting position centered
dodger.style.transform = "translateX(-50%)"; // Adjust for the width of the dodger

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left < 360) { // 400px (game width) - 40px (dodger width)
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
});
