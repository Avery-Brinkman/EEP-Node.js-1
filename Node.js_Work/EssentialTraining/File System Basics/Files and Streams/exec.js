// https://skimfeed.com/blog/windows-command-prompt-ls-equivalent-dir/

// exec is designed for sync processes. Things that will run and close, 
// and maybe spit back some data as a one time event.

const cp = require('child_process');
const { stderr } = require('process');

console.log('\n\n');

// cp.exec('explorer http://www.google.com/')

// cp.exec('start PowerShell')

cp.exec('dirt', (err, data, stderr) => {
    // err is the VSC error
    // stderr is the PowerShell error (or UNIX Bash or Linux Command Line)
    if (err) {
        console.log(stderr);
    }
    console.log(data);
})

cp.exec('node ./readStream.js', (err, data, stderr) => {
    if (err) {
        console.log(stderr);
    }
    console.log(data);
})