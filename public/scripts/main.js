import { answers } from "./answers.js";

const askQuestions = () => {
  answerContainer.textContent = '';

  const totalAnswers = answers.length;
  const randomIndex = Math.floor(Math.random() * totalAnswers);

  if(input.value === '') {
    alert('Digite sua pergunta');
    return;
  }

  askQuestionButton.setAttribute('disabled', true);

  const question = `<h3>${input.value}</h3>`;
  const answer = `<h3>${answers[randomIndex]}</h3>`;
  
  answerContainer.insertAdjacentHTML("beforeend", question + answer);
  answerContainer.style.opacity = 1;
  
  setTimeout(() => {
    answerContainer.style.opacity = 0;
    askQuestionButton.removeAttribute('disabled');
  }, 2000);

}

askQuestionButton.addEventListener("click", askQuestions);