const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/* "= (f) => f" gives "doneCallback" a default value that
 * doesn't really do anything, but lets the program run
 * even if collectAnswers isn't given a doneCallback */
module.exports = (questions, doneCallback = (f) => f) => {
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