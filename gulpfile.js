var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload');

gulp.task('default', ['watch']);

gulp.task('sass', function() {
  return gulp.src('assets/sass/*.scss')
    .pipe(plumber({
      errorHandler: function (err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe(sass())
    .pipe(gulp.dest('assets/css'))
    .pipe(livereload())
});

gulp.task('watch', function(){
  livereload.listen();
  gulp.watch('assets/sass/**/*.scss', ['sass']);
});
