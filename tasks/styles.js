let gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-csso'),
    browserSync = require('browser-sync').create(),
    rename = require('gulp-rename'),
    concatCss = require('gulp-concat-css');

let stylesPath = "source/assets/stylesheets";

const build = function(){
  return gulp.src(`${stylesPath }/scss/main.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(stylesPath))
    .pipe(browserSync.stream());
}

module.exports = { build };
