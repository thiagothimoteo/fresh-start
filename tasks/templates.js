let pug = require('gulp-pug');
let gulp = require('gulp');

let templatesPath = "source/templates"

const build = function () {
  return gulp.src(`${templatesPath}/*.pug`)
  .pipe(pug({
    pretty: true,
  }))
  .pipe(gulp.dest('./source/views'));
};

module.exports = { build }
