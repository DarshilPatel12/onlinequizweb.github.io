const quizDB = [
    {
        question: "Q1: 'OS' computer abbreviation usually means ?",
        a: "Order of Significance",
        b: "Open Software",
        c: "Operating System",
        d: "Optical Sensor",
        ans: "ans3"
    },
    {
        question: "Q2: Who was known as Iron man of India?",
        a: "Govind Ballabh Pant",
        b: "Jawaharlal Nehru",
        c: "Subhash Chandra Bose",
        d: "Sardar Vallabhbhai Patel",
        ans: "ans4"
    },
    {
        question: "Q3: The Indian to beat the computers in mathematical wizardry is",
        a: "Ramanujam",
        b: "Rina Panigrahi",
        c: "Raja Ramanna",
        d: "Shakunthala Devi",
        ans: "ans4"
    },
    {
        question: "Q4: Which was the 1st non Test playing country to beat India in an international match?",
        a: "Canada",
        b: "Sri Lanka",
        c: "Zimbabwe",
        d: "East Africa",
        ans: "ans2"
    },
    {
        question: "Q5: Which county did Ravi Shastri play for?",
        a: "Glamorgan",
        b: "Leicestershire",
        c: "Gloucestershire",
        d: "Lancashire",
        ans: "ans1"
    },
    {
        question: "Q6: When is the World Population Day observed?",
        a: "May 31",
        b: "October 4",
        c: "December 10",
        d: "July 11",
        ans: "ans4"
    },
    {
        question: "Q7: The Radcliffe line is a boundary between",
        a: "India and Pakistan",
        b: "India and China",
        c: "India and Myanmar",
        d: "India and Afghanistan",
        ans: "ans1"
    },
    {
        question: "Q8: The centenary of Mahatma Gandhi's arrival in South Africa was celebrated in",
        a: "May 1993",
        b: "August 1993",
        c: "July 1993",
        d: "September 1993",
        ans: "ans4"
    },
    {
        question: "Q9: Who wrote the famous book - 'We the people'?",
        a: "T.N.Kaul",
        b: "J.R.D. Tata",
        c: "Khushwant Singh",
        d: "Nani Palkhivala",
        ans: "ans4"
    },
    {
        question: "Q10: The ratio of width of our National flag to its length is",
        a: "3:5",
        b: "2:3",
        c: "2:4",
        d: "3:4",
        ans: "ans2"
    },
    {
        question: "Q11: 'Dandia' is a popular dance of",
        a: "Punjab",
        b: "Gujarat",
        c: "Tamil Nadu",
        d: "Maharashtra",
        ans: "ans2"
    },
    {
        question: "Q12: Garampani sanctuary is located at",
        a: "Junagarh, Gujarat",
        b: "Diphu, Assam",
        c: "Kohima, Nagaland",
        d: "Gangtok, Sikkim",
        ans: "ans2"
    },
    {
        question: "Q13: Federation Cup, World Cup, Allywyn International Trophy and Challenge Cup are awarded to winners of",
        a: "Tennis",
        b: "Volleyball",
        c: "Basketball",
        d: "Cricket",
        ans: "ans2"
    },
    {
        question: "Q14: Golden Temple, Amritsar is India's",
        a: "largest Gurdwara",
        b: "oldest Gurudwara",
        c: "Both option A and B are correct",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "Q15: Heavy Water Project (Talcher) and Fertilizer plant (Paradeep) are famous industries of",
        a: "Orissa",
        b: "Tamil nadu",
        c: "Andhra Pradesh",
        d: "Kerala",
        ans: "ans1"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () =>{

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

loadQuestion();


const getCheckAnswer = () =>{
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
}

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false );
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
            <h3> You scored ${score}/${quizDB.length} ✌ </h3>
            <button class="btn" onclick="location.reload()"> Play Again </button>
        `;

        showScore.classList.remove('scoreArea');
    }
});