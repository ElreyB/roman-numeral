var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

function createErrorHandler(name) {
  return function (err) {
    console.error('Error from ' + name + ' in compress task', err.toString());
  };
}
// to make readable error messages
//https://github.com/terinjokes/gulp-uglify/tree/master/docs/why-use-pump

gulp.task('concatInterface', function() {
  return gulp.src(['./js/*-interface.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});


gulp.task('jsBrowserify', ['concatInterface'], function() {
  return browserify({ entries: ['./tmp/allConcat.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task("minifyScripts", ["jsBrowserify"], function(){
  return gulp.src("./build/js/app.js")
  .on('error', createErrorHandler('gulp.src'))
    .pipe(uglify())
     .on('error', createErrorHandler('uglify'))
    .pipe(gulp.dest("./build/js"))
    .on('error', createErrorHandler('gulp.dest'));
});
