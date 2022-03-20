const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso');
const autoprefixer = require('gulp-autoprefixer');

const rootFileToCompile = './scss/index.scss';
const rootFilesToWatch = ['./scss/**/*.scss','./scss/index.scss'];

function buildStyles() {
  return src(rootFileToCompile).pipe(sass())
    .pipe(autoprefixer({cascade:false}))
    .pipe(csso())
    .pipe(dest('css'));
}

function watchTask(){
  watch(rootFilesToWatch,buildStyles);
}

exports.default = series(buildStyles,watchTask);