const questionOne = document.querySelector('#one');
const questionTwo = document.querySelector('#two');
const questionThree = document.querySelector('#three');
const questionFour = document.querySelector('#four');
const questionFive = document.querySelector('#five');

const questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

let answerVisible = false;

function toggle(question) {
    let answer = question.parentElement.lastElementChild;
    if(!question.classList.contains('active')) {
        question.classList.add('active');
        answer.setAttribute('style', 'max-height:300px; opacity:1; margin-top:1.3em;');
        answerVisible = true;
    } else if(question.classList.contains('active')) {
        question.classList.remove('active');
        answer.setAttribute('style', 'max-height:0; opacity:0; margin-top:0;');
        answerVisible = false;
    };
}

questions.forEach((question) => {
    question.addEventListener('click', (e) => {
        let clickedQuestion = e.target;

        if(answerVisible) {
            let activeQuestion = questions.filter(question => !!question.classList.contains('active'))[0];
            if(activeQuestion != clickedQuestion) {
                toggle(activeQuestion);
                // don't return so that the clicked question will subsequently be toggled since answerVisible will now be false
            } else {
                toggle(clickedQuestion);
                return;
            }
        }
        
        if(!answerVisible) { 
            toggle(clickedQuestion);
            return;
        }
    })
})