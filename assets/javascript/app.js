//have code run only when the page is ready
$(document).ready(function() {

//create array with questions, multiple choice answers, and correct answer 
    var questions = [
        {question: "How many national parks are in the USA?", answer: ["103", "58", "86", "162"], correctAns: "58"}, 
        {question: "What state is Sequoia National Park in?", answer: ["California", "Oregon", "Montana", "Washington"], correctAns: "California"}, 
        {question: "Where is the largest National park?", answer: ["Utah", "Florida", "California", "Alaska"], correctAns: "Alaska"}, 
        {question: "El Capitan and Half Dome are iconic granite cliffs located in which national park?", answer: ["Sierra Nevada National Park", "Yosemite National Park", "Zion National Park", "Yellowstone National Park"], correctAns: "Yosemite National Park"} 
    ];

    console.log(questions);

    // create variables
    var correctQ = 0,
        wrongQ = 0,
        questionIndex = 0,
        remainingTime = 100;
        

    //hide the start button after clicked
    //onclick to display questions

    $("#startB").on("click", function () {
        $("#startB").hide();
        for (var i = 0; i < questions.length; i++) {
          $("#questions").append("<h4>" + questions[i].question + "</h4>")
          for (var j = 0; j < questions[i].answer.length; j++) {
            $("#questions").append("<input type = 'radio' name='question-" + i + " ' value=' " + questions[i].answer[j] + " '> " + questions[i].answer[j])
          }
        }
        displayClock();
    
        counter = setInterval(displayClock, 1000);

        //start countdown
        function displayClock(){
            remainingTime--;
            $("#timer").text("Remaining time: " + remainingTime);
            if (remainingTime === 0){
                clearInterval(counter)
            }
        };
    });

    //function to check the answers for correctness
    function ansCheck (){

    };
    
    //function to reset the game

    function reset (){

    };

    
});

//event to capture the users answer choice for each question

//only allow one answer per question 
//timer countdown 
//when time ends, compare the submitted answers to the true answer
//unanswered questions are counted as wrong 
//display the number of correct and wrong answers



