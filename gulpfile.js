const gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    inlineimg = require('gulp-inline-image-html'),
    rename = require('gulp-rename')

gulp.task('sass-concat', () => {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/css'))
})

gulp.task('inlineimg', () => {
    return gulp.src('./index-jpg-responsive.html')
        .pipe(inlineimg('./'))
        .pipe(rename({suffix: '-base64'}))
        .pipe(gulp.dest('./'))
})