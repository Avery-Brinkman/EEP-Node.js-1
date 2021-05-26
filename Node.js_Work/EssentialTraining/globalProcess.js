console.log('\nprocess.pid', process.pid)
console.log('process.versions.node', process.versions.node)
console.log('process.argv', process.argv)

const [,,firstName,lastName] = process.argv
console.log(`Your name is ${firstName} ${lastName}.`)
/* >node globalProcess.js Avery Brinkman
 *  [
 *  'C:\\Program Files\\nodejs\\node.exe',
 *  'C:\\Users\\avery\\source\\repos\\Avery-Brinkman\\EEP\\
 *   Node.js_Work\\essentialtraining\\globalprocess.js',
 *  'Avery',
 *  'Brinkman'
 *  ]
 *  Your name is Avery Brinkman
 */


/* Function will grab our flag that we send to it 
 * const grab is a function (bc of the =>) that 
 * takes an input called flag. This is like a 
 * lambda function in python, and could also be 
 * written as const grab = function(flag) {...} */
const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1
    return process.argv[indexAfterFlag]
}

const greeting = grab('--greeting')
const user = grab('--user')
console.log(`${greeting} ${user}`)
/* >node globalProcess.js --user Avery --greeting "yo what's up"
 *  yo what's up Avery */
