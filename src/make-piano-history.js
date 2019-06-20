var shell = require('shelljs');

shell.echo('hello world');
 
if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}