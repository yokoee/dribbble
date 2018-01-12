const gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload')

gulp.task('less', function() {
    gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('css'))
        .pipe(livereload())
})
gulp.task('html', function() {
    gulp.src('*.html')
        .pipe(livereload())
})
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('less/*.less', ['less']);
    gulp.watch('*.html', ['html'])
})