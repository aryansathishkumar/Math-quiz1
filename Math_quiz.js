    score_1 = 0;
    score_2 = 0;
    player_1 = document.getElementById("name_1").innerHTML = localStorage.getItem("name1");
    player_2 = document.getElementById("name_2").innerHTML = localStorage.getItem("name2");

    document.getElementById("question").innerHTML = "Questioning turn -" + player_1;
    document.getElementById("answer").innerHTML = "answering turn -" + player_2;


    var answer = player_2;
    var question = player_1;
    
function Send()
{
    var input1 = document.getElementById("input_num_1").value; 
    var input2 = document.getElementById("input_num_2").value;

    localStorage.setItem("input1", input1);
    localStorage.setItem("input2", input2);

    console.log(input1, input2);
 
    var question_asked = input1 + "x" + input2;

    document.getElementById("output").innerHTML = "<h3>Math Quiz</h3>"+"<br>"+"<br>"+ 
    "Q. "+" " + question_asked + "<br>"+"<span>Answer:<input id='input_check' class='form-control' type='number'"+
    "placeholder='Type the answer'></span>"+"<br>"+"<button class='btn-success' onclick='Check()'>Check</button>"+"<br>";
     
}
function Check()
{
    var input6 = document.getElementById("input_num_1").value; 
    var input5 = document.getElementById("input_num_2").value;
    input_4 = input5*input6;
    console.log("check() function is called");
    var input_2 = document.getElementById("input_check").value;
    
    if(input_2 == input_4)
    {
        if(answer == player_2)
        {
            score_2++;
            document.getElementById("player_2_score").innerHTML = score_2;
        }
        else
        {
            score_1++
            document.getElementById("player_1_score").innerHTML = score_1;
        }
    }
        if(question == player_1)
        {
            question = player_2;
            document.getElementById("question").innerHTML = "Questioning turn -" + question;
        }
        else
        {
            question = player_1;
            document.getElementById("question").innerHTML = "Questioning turn -" + question;
        }
        if(answer == player_1)
        {
            answer = player_2; 
            document.getElementById("answer").innerHTML = "answering turn -" + answer;
        }
        else
        {
            answer = player_1;
            document.getElementById("answer").innerHTML = "answering turn -" + answer;
        }
}    
