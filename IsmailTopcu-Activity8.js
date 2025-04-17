var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

function displayResults() {
    let sum = 0;
    let max = scores[0];
    let maxIndex = 0;

    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
        if (scores[i] > max) {
            max = scores[i];
            maxIndex = i;
        }
    }

    let average = (sum / scores.length).toFixed(2);

    document.getElementById("results").innerHTML =
        "<h2>Results</h2>" +
        "<p>Average score is " + average + "</p>" +
        "<p>High score = " + names[maxIndex] + " with a score of " + max + "</p>";
}

function displayScores() {
    const table = document.getElementById("scores_table");

   
    table.innerHTML = "<h2>Scores</h2>";
    table.innerHTML += "<table><tr><th>Name</th><th>Score</th></tr>";

    for (let i = 0; i < names.length; i++) {
        let row = "<tr><td>" + names[i] + "</td><td>" + scores[i] + "</td></tr>";
        table.innerHTML += row;
    }

    table.innerHTML += "</table>"; 
}

function addScore() {
    const name = document.getElementById("name").value.trim();
    const score = parseInt(document.getElementById("score").value);

    if (name === "" || isNaN(score) || score < 0 || score > 100) {
        alert("You must enter a name and a valid score between 0 and 100.");
    } else {
        names.push(name);
        scores.push(score);
        document.getElementById("name").value = "";
        document.getElementById("score").value = "";
        document.getElementById("name").focus();
    }
}

window.onload = function () {
    $("display_results").onclick = displayResults;
    $("display_scores").onclick = displayScores;
    $("add").onclick = addScore;
    $("name").focus(); 
};