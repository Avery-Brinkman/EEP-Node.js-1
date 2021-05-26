const waitTime = 3000 // 1000 ms = 1 s
const waitInterval = 500
let currentTime = 0

const incTime = () => {
    currentTime += waitInterval
    const perc = Math.floor((currentTime/waitTime)*100)

    process.stdout.clearLine(); // Clears last line that we wrote
    process.stdout.cursorTo(0); // Moves cursor
    process.stdout.write(`Waiting ... ${perc}%`)
}

console.log(`Setting a ${waitTime/1000} s delay.`)

const timerFinished = () => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log('Done!')
    clearInterval(interval) // w/out this, setInterval won't stop
}

/* Basically same format as setTimeout.
 * setInterval() returns the interval */
const interval = setInterval(incTime, waitInterval)

// setTimeout(functionRanAfterTimer, timer)
setTimeout(timerFinished, waitTime)
/* This runs even though setTimeout isn't done.
 * This is what it means to be asynchronous!!! */
console.log('Not done...')

