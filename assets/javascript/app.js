//create start button

//create array with multiple choice questions and answer
const questions = [
    {question: "How many national parks are in the USA?", answer: {a: "103", b: "58", c: "86", d: "162"}, correctAns: "b"}, 
    {question: "What state is Sequoia National Park in?", answer: {a: "California", b: "Oregon", c: "Montana", d: "Washington"}, correctAns: "a"}, 
    {question: "Where is the largest National park?", answer: {a: "Utah", b: "Florida", c: "California", d: "Alaska"}, correctAns: "d"}, 
    {question: "El Capitan and Half Dome are iconic granite cliffs located in which national park?", answer: {a: "Sierra Nevada National Park",b: "Yosemite National Park", c: "Zion National Park", d: "Yellowstone National Park"}, correctAns: "b"} 
];

// create variables
var score = 0,
    correctQ = 0,
    wrongQ = 0;


//functions needed

//event to capture the users answer choice for each question

//only allow one answer per question 
//timer countdown 
//when time ends, compare the submitted answers to the true answer
//unanswered questions are counted as wrong 
//display the number of correct and wrong answers



