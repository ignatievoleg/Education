const gulpfile = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
const gulp = require("gulp");

gulpfile.task('clean', function(cb) {
    del(['./dist/*']);
    cb();
})

gulpfile.task('sass', function(cb) {
    gulpfile.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpfile.dest('./dist'));
    cb();
})

gulpfile.task('copy:html', function (cb) {
    gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'))
    cb()
})

gulpfile.task('copy:js', function (cb) {
    gulp.src('./src/*.js')
        .pipe(gulp.dest('./dist'))
    cb()
})

gulpfile.task('watch', function () {
    gulpfile.watch(['./src/**/*.scss', './src/index.html'], gulpfile.series(['clean', 'sass', 'copy:html', 'copy:js']));
})

gulpfile.task('default', gulpfile.series(['clean', 'sass', 'copy:html', 'copy:js']))