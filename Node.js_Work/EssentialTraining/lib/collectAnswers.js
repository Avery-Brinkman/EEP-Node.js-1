const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports = (questions, doneCallback) => {
    const answers = [];
    const [firstQ] = questions;

    const questionAnswered = (answer) => {
        answers.push(answer);
        if (answers.length < questions.length){
            rl.question(questions[answers.length], questionAnswered);
        } else {
            doneCallback(answers);
        }
    };

    rl.question(firstQ, questionAnswered);
};