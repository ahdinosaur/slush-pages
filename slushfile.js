var gulp = require('gulp');
var install = require('gulp-install');
var conflict = require('gulp-conflict');
var template = require('gulp-template');
var inquirer = require('inquirer');
 
gulp.task('default', function (done) {
  inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: 'Give your app a name',
    // Get app name from arguments by default 
    default: gulp.args.join(' '),
  }, {
    type: 'confirm',
    name: 'moveon',
    message: 'Continue?',
  }],
  function (answers) {
    if (!answers.moveon) {
      return done();
    }
    gulp.src(__dirname + '/template/**')  // Note use of __dirname to be relative to generator 
      .pipe(template(answers)) // Lodash template support 
      .pipe(conflict('./')) // Confirms overwrites on file conflicts 
      .pipe(gulp.dest('./')) // Without __dirname here = relative to cwd 
      .pipe(install()) // Run `bower install` and/or `npm install` if necessary 
      .on('finish', function () {
        done(); // Finished! 
      });
  });
});
