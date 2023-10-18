const gulp = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const sourcemaps = require("gulp-sourcemaps")
const uglify = require("gulp-uglify")
const imagemin = require("gulp-imagemin")
const obsfucate = require("gulp-obfuscate")


function sassCompiler(){
    return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'))
}
function jsCompresser() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obsfucate())
    .pipe(gulp.dest('./build/scripts'))
}
function imgCompresser(){
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}
exports.default = function(){
    gulp.watch('./source/styles/*.scss', {ignoreInitial:false}, gulp.series(sassCompiler))
    gulp.watch('./source/scripts/*.js', {ignoreInitial:false}, gulp.series(jsCompresser))
    gulp.watch('./source/images/*', {ignoreInitial:false}, gulp.series(imgCompresser))
}
