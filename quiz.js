function checkAnswer(){
    const correctAnswer="4";
    const seletedOption = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedOption ? selectedOption.value : null;
    const feedbackElement = document.getElementById("feedback");

    if (userAnswer===correctAnswer){
        feedbackElement.textContent = "correct! Well done.";
    } else{
        feedbackElement.textContent = "That's incorrect. Try again!.";
    }
}
    document.getElementById("submit-answer").addEventListener("click", checkAnswer);
