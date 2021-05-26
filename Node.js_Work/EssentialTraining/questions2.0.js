const questions = [
    'What is your name? ',
    'Where do you live? ',
    'What are you doing? '
]

collectAnswers(questions, (answers) => {
    console.log('Thanks for answers!')
    console.log(answers)
    process.exit()

})