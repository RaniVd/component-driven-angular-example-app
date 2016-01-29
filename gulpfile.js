var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');


var paths = {
    sass: ['./scss/**/*.scss'],
    angular: [
       './www/app/infrastructure/**.js',
       './www/app/pages/**/**.js',
       './www/app/components/**/**.js'
    ]
};

gulp.task('default', ['sass']);

gulp.task('build', ['sass', 'scripts']);

gulp.task('sass', function(done) {
    gulp.src('./scss/dashboard.app.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./www/lib/css/'))
        .pipe(livereload())
        .on('end', done);
});

/**
 * concatenate and uglify angular files
 */
gulp.task('scripts', function(done) {
    gulp.src(paths.angular)
        .pipe(concat('dashboard.min.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('./www/lib/js'))
        .on('end', done);
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.angular, ['scripts']);
});

