const gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    inlineimg = require('gulp-inline-image-html'),
    rename = require('gulp-rename'),
    babel = require('gulp-babel')

gulp.task('sass-concat', () => {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(concat('styles-concat.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/css'))
})

gulp.task('sass', () => {
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

gulp.task('js', () => {
    return gulp.src('./src/js/**/*.js')
        .pipe(babel({
            presets: ['es2015']}))
        .pipe(gulp.dest('./build/js'))
})

gulp.task('js-concat', () => {
    return gulp.src('./src/js/**/*.js')
        .pipe(concat('scripts-concat.js'))
        .pipe(babel({
            presets: ['es2015']}))
        .pipe(gulp.dest('./build/js'))
})

gulp.task('watch-concat', () => {
    gulp.watch('./src/js/**/*', ['js-concat'])
    gulp.watch('./src/sass/**/*.scss', ['sass-concat'])
})

gulp.task('watch', () => {
    gulp.watch('./src/js/**/*', ['js'])
    gulp.watch('./src/sass/**/*.scss', ['sass'])
})