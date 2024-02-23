const quizDB=[
    {
        question: "Q1: What does the acronym 'CPU' stand for in the context of computers?",
        a: "Central Processing Unit",
        b: "Core Programming Unit",
        c: " Computer Processing Unit",
        d: "Computer Performance Unit",
        ans: "ans1",
    },
    {
        question: "Q2: Which protocol is used to retrieve emails from a mail server to a mail client?",
        a: "SMTP",
        b: "HTTP",
        c: "POP3",
        d: "FTP",
        ans: "ans3",
    },
    {
        question: "Q3: What is the fullform of SSD ?",
        a: "Secure System Disk",
        b: "Solid State Drive",
        c: "Sound Storage Device",
        d: "System Software Distributor",
        ans: "ans2",
    },
    {
        question: "Q4: Which computer scientist is credited with developing the World Wide Web (WWW)?",
        a: "Tim Berners-Lee",
        b: "Bill Gates",
        c: "Steve Jobs",
        d: "Mark Zuckerberg",
        ans: "ans1",
    },
    {
        question: "Q5: What is the full Form of SMS ",
        a: "Show Mail Service",
        b: "Short Message Service",
        c: "Short Message Server",
        d: "Short Mail Service",
        ans: "ans2", 
    },
   
]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');


const answers = document.querySelectorAll('.answe');

const showscore = document.querySelector('#showscore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

loadQuestion();

const getcheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
        
    });

    return answer;
};
const deselectALL = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false)
}

submit.addEventListener('click' , () => {
    const checkedAnswer = getcheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer ==  quizDB[questionCount].ans ){
        score++;
    };
    
    questionCount++;
    deselectALL();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showscore.innerHTML = `
        <h3> Your Score is ${score}/${quizDB.length} </h3>
        <button class = "btn" onclick = "location.reload()"> PLAY AGAIN</button>
        
        `;
        showscore.classList.remove('scorearea');
        submit.classList.add("disp");
    }
    

        
});