document.addEventListener('DOMContentLoaded', () => {
    const puzzleContainer = document.getElementById('puzzleContainer');
    const revealContainer = document.getElementById('revealContainer');
    const secretMessage = document.getElementById('secretMessage');
    const retryMessage = document.getElementById('retryMessage');
    const answerInput = document.getElementById('answerInput');
    const submitButton = document.getElementById('submitAnswer');

    const riddle = "You see me in the day, I vanish by nightfall. I bring clarity to the obscure. What am I?";
    const answer = "roshni"; // Correct answer
    const acceptableAnswers = ["roshni", "roshn", "rosh", "roshnee"]; // Acceptable variations

    document.getElementById('riddle').textContent = riddle;

    submitButton.addEventListener('click', () => {
        const userAnswer = answerInput.value.trim().toLowerCase();

        if (acceptableAnswers.includes(userAnswer)) {
            revealContainer.style.display = 'block';
            puzzleContainer.style.display = 'none';
            retryMessage.style.display = 'none'; // Hide retry message if it was displayed
        } else {
            retryMessage.style.display = 'block';
        }
    });
});
