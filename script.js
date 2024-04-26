function startGame() {
    // Hide the title, button, and level text
    document.getElementById("title").style.display = "none";
    document.getElementById("startButton").style.display = "none";
    document.getElementById("levelText").style.display = "none";

    // Show the course text and buttons
    document.getElementById("courseText").style.display = "block";
    document.getElementById("courseButtons").style.display = "block";
}
