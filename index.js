const btn = document.querySelector('#btn');
const rightAnswer = document.querySelector('#rightAnswer');

btn.addEventListener('click', result);

function result(e) {
    e.preventDefault();
    
    let points = 0;

    if (document.querySelector('#answer1').checked) {
        points++;
    }

    if (document.querySelector('#answer2').checked) {
        points++;
    }

    if (document.querySelector('#answer3').checked) {
        points++;
    }

    if (document.querySelector('#answer4').checked) {
        points++;
    }

    if (document.querySelector('#answer5').checked) {
        points++;
    }

    if (document.querySelector('#answer6').checked) {
        points++;
    }

    if (document.querySelector('#answer7').checked) {
        points++;
    }

    if (document.querySelector('#answer8').checked) {
        points++;
    }

    if (document.querySelector('#answer9').checked) {
        points++;
    }

    if (document.querySelector('#answer10').checked) {
        points++;
    }

    rightAnswer.textContent =  `Ваши баллы ${points}/10`;
}

const btnTrue = document.querySelector('#btnTrue');
const trueAnswer = document.querySelectorAll('#trueAnswer');
const description = document.querySelectorAll('.description')

btnTrue.addEventListener('click', (e) => {
    e.preventDefault();
    trueAnswer.forEach(item => {
        item.classList.add('trueAnswer')
    });
    description.forEach(item => {
        item.style.display = 'block'
    })

})



