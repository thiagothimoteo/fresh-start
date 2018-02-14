let gulp = require('gulp');

let styles = require('./tasks/styles'),
    scripts = require('./tasks/scripts'),
    templates = require('./tasks/templates'),
    browserSync = require('./tasks/watch');

gulp.task('styles', styles.build);

gulp.task('scripts', scripts.build);

gulp.task('templates', templates.build);

gulp.task('serve', ['templates', 'styles', 'scripts'], browserSync.watch);

gulp.task('default', ['serve']);