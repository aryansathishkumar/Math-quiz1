function user()
{
    name1 = document.getElementById("player_1").value;
    name2 = document.getElementById("player_2").value;

    localStorage.setItem("name1", name1);
    localStorage.setItem("name2", name2);

    window.location = "Math_Quiz.html";
}