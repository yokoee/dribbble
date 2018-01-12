const gulp = require('gulp'),
    connect = require('gulp-connect'),
    less = require('gulp-less');

gulp.task('less', () => {
    gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('css'))
        .pipe(connect.reload());
})

gulp.task('html', () => {
    gulp.src('*.html')
        .pipe(connect.reload());
})

gulp.task('watch', ['server'], () => {
    gulp.watch('less/*.less', ['less']);
    gulp.watch('*.html', ['html']);
})

gulp.task('server', () => {
    connect.server({
        liveload: true,
        port: 8080,
    })
})

gulp.task('default', ['watch'])