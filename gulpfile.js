var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var inject = require('gulp-inject');

gulp.task('sass', function() {
  return gulp.src('./source/components/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/css'));
});

gulp.task('inject-css', function() {
  var target = gulp.src('./source/index.html');
  var sources = gulp.src(['./build/**/*.css'], { read: false });

  return target.pipe(inject(sources))
    .pipe(gulp.dest('./build'));
});

gulp.task('combine-js', function() {
  return browserify('./source/app.js')
    .transform(babelify, { presets: ["react"] })
    .bundle()
    .pipe(source('scrumboard.js'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('browserSync', ['sass', 'inject-css', 'combine-js'], function() {
  browserSync.init({
    server: {
      baseDir: 'build'
    },
  });
});

gulp.task('watch', ['browserSync'], function() {
  gulp.watch('source/**/*.scss', ['sass']);
  gulp.watch('source/**/*.js', ['combine-js']);
  gulp.watch('build/**/*.css', browserSync.reload);  
  gulp.watch('build/scrumboard.js', browserSync.reload);
  gulp.watch('build/index.html', browserSync.reload);  
});

gulp.task('default', ['watch'], function() {

});


/*
 * Merge all html files into one.
 */
// gulp.task('useref', function() {
//   return gulp.src('source/*.html')
//     .pipe(useref())
//     .pipe(gulp.dest('build'));
// });
