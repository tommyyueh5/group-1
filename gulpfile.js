//使用require 引用
var cleanCSS = require('gulp-clean-css');
gulp = require('gulp');
rename = require("gulp-rename");
del = require('del');
sass = require('gulp-sass');
watch = require('gulp-watch');
fileinclude = require('gulp-file-include');

//搬家
gulp.task('concatcss', function () {
    gulp.src('dev/css/*.css').pipe(gulp.dest('dest/css'));
});

gulp.task('cleanCSS', function () {
    return gulp.src('dev/css/*.css')   //所有要壓縮的 .css 檔案
        .pipe(cleanCSS())                   //將 css 最小化
        .pipe(rename(function (path) {
            path.basename += ".min";
        }))
        .pipe(gulp.dest('dest/min/css')) //壓縮後檔案輸出位置
});

gulp.task('cleanJs', function () {
    return gulp.src('dev/js/*.js')   //所有要壓縮的 .css 檔案
        .pipe(cleanCSS())                   //將 css 最小化
        .pipe(rename(function (path) {
            path.basename += ".min";
        }))
        .pipe(gulp.dest('dest/min/js')) //壓縮後檔案輸出位置
});

//編譯sass
gulp.task('sass', ['template'], function () {
    gulp.src('dev/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dev/css'))

});

//html template
var fileinclude = require('gulp-file-include');
gulp.task('template',['concatcss'], function () {
    gulp.src(['dev/html/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dest/html'));
});

var watch = require('gulp-watch');

gulp.task('watch', function () {
    gulp.watch('./dev/sass/*.scss', ['sass']);
    gulp.watch('./dev/css/*.css', ['cleanCSS']);
    gulp.watch('./dev/js/*.js', ['cleanJs']);
});