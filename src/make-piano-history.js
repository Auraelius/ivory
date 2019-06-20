var shell = require('shelljs');
let status = "";


shell.echo('this script will collect all the piano records in history!');
 
if (!shell.which('git')) {
  console.log('Sorry, this script requires git');
  shell.exit(1);
}

status = shell.cd('backend/data');

if (status.stder && status.stderr.includes("cd: no such file or directory")) {
  console.log('Sorry, this script needs the backend git repo to be present');
  shell.exit(1);
}

// TODO
/*
get all commits starting with "c42f2bf fixed typos" and later
capture in an array

*/

// Run external tool synchronously
if (shell.exec('git log --oneline').code !== 0) {
  shell.echo('Error: Git commit failed');
  shell.exit(1);
}