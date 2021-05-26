process.stdout.write("hello ")
process.stdout.write(" world\n")

/* console.log method adds new line for each msg, while
 * process.stdout.write method just sends strings. */

const questions = [
    'What is your name?',
    'What are you doing?',
    'Preferred programming language?'
]
const ask = (i=0) => {
    process.stdout.write(`${questions[i]}`)
    process.stdout.write(` > `)
}
ask()
/* process.stdout.write method can make terminal 
 * write on the same line as outputs.
 * Ex. What is your name? > $_ */


const answers = []
/* .on() lets stdin listen for events (named data here) 
 * second argument is handler, or the function that
 * will be used on that data */
process.stdin.on('data', data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length){
        ask(answers.length)
    } else {
    process.exit() /* Without this, program just keeps listening 
                    * and will loop */
    }
})


// Listens for exit event
process.on('exit', () => {
    const [name, activity, lang] = answers

    console.log(`
Answers:
    Name: ${name}
    Activity: ${activity}
    Language: ${lang}
    `)

    /*answers.forEach((response => {
        console.log(response)
    }))*/

})