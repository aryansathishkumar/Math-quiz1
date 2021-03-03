var score = 0;
function updateScore()
{
    score+=1;
    document.getElementById("score").innerHTML = score;
}
function saveScore()
{
    localStorage.setItem("score", score);
}
function nextPage()
{
    window.location = "index3.html"
}