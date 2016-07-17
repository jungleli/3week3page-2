var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('serve',['sass'], function() {
  browserSync.init({
    server: "./"
  });

  gulp.watch('./src/*.scss', ['sass']);
  gulp.watch('./src/*.html').on('change', browserSync.reload);
});

gulp.task('sass', function () {
  return gulp.src('./src/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
});

gulp.task('images', function () {
  return gulp.src('./src/images/**')
    .pipe(gulp.dest('./dist/images/'));
});

gulp.task('default', ['serve']);