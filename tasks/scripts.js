let gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    babel = require("gulp-babel"),
    clean = require("gulp-clean"),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

let scriptsPath = "source/assets/javascripts";

const build = function() {
  return gulp.src(`${scriptsPath}/index.js`)
    .pipe(babel())
    .pipe(concat('main.js'))
    .pipe(gulp.dest(scriptsPath))
    .pipe(browserSync.stream())
}

module.exports = { build };
