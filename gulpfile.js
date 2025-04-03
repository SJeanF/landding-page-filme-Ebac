const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps')
const cleancss = require('gulp-clean-css')
const htmlmin = require('gulp-htmlmin')
const imagemin = require('gulp-imagemin')
const jsobfuscate = require('gulp-javascript-obfuscator')

function minificaHtml () {
    return gulp.src('./src/index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist'))
}

function styles () {
    return gulp.src('./src/sass/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cleancss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css'))
}

function obfuscaJS () {
    return gulp.src('./src/js/*.js')
    .pipe(jsobfuscate())
    .pipe(gulp.dest('./dist/js'))
}

function minificaImg () {
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
}

function build () {
    return gulp.parallel(minificaHtml, styles, obfuscaJS, minificaImg);
}

module.exports.build = build();

