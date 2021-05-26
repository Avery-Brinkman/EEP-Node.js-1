const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const questions = [
    'What is your name? ',
    'Where do you live? ',
    'What are you doing? '
]

const collectAnswers = (questions, doneCallback) => {
    const answers = []
    const [firstQ] = questions

    const questionAnswered = (answer) => {
        answers.push(answer)
        if (answers.length < questions.length){
            rl.question(questions[answers.length], questionAnswered)
        } else {
            doneCallback(answers)
        }
    }

    rl.question(firstQ, questionAnswered)
}

collectAnswers(questions, (answers) => {
    console.log('Thanks for answers!')
    console.log(answers)
    process.exit()
})