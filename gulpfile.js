//使用require 引用
var cleanCSS = require('gulp-clean-css');
gulp = require('gulp');
rename = require("gulp-rename");
del = require('del');
sass = require('gulp-sass');
watch = require('gulp-watch');
fileinclude = require('gulp-file-include');

//搬家
gulp.task('concatHtml', function() {
    //do sometime
    gulp.src('./dev/html/index/earth/**/*').pipe(gulp.dest('dest/index/earth/'))
});
gulp.task('concatjs', function() {
    //do sometime
    gulp.src('./dev/html/**/*.js').pipe(gulp.dest('dest/'))
    gulp.src('./dev/js/*.js').pipe(gulp.dest('dest/js'))
});
gulp.task('concatcss', function() {
    //do sometime
    gulp.src('./dev/css/*.css').pipe(gulp.dest('dest/css'))
});
gulp.task('concatimage', function() {
    //do sometime
    gulp.src('./dev/image/**/*').pipe(gulp.dest('dest/image'))
    gulp.src('./dev/html/Epidemic-shop/img/*').pipe(gulp.dest('dest/Epidemic-shop/img/'))
});
gulp.task('concatphp', function() {
    //do sometime
    gulp.src('./dev/html/*/PHP/*').pipe(gulp.dest('dest/'))
});
gulp.task('concatlatest', function() {
    //do sometime
    gulp.src('./dev/html/latest-news/map/**/*').pipe(gulp.dest('dest/latest-news/map/'))
});
gulp.task('concatshop_move', function() {
    //do sometime
    gulp.src('./dev/html/Epidemic-shop/img/**/*').pipe(gulp.dest('dest/Epidemic-shop/img'))
});
gulp.task('concat_icofont', function() {
    //do sometime
    gulp.src('./dev/html/Epidemic-shop/icofont/**/*').pipe(gulp.dest('dest/Epidemic-shop/icofont'))
});
//編譯scss


gulp.task('sass', function() {
    gulp.src('./dev/html/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dest/'))
});
//壓縮檔案
gulp.task('minicss', ['sass'], function() {
    gulp.src('dev/css/*.css')
        //壓縮
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        //完成搬家
        .pipe(gulp.dest('dest/mini/css'));
    //完成新增檔案命名
    gulp.src('dest/mini/css/style.css')
        .pipe(rename('style-min.css'))
        .pipe(gulp.dest('dest/mini/css'));
});
//完成刪除舊檔名
gulp.task('clean', function() {
    del(['dest/mini/css/style.css']);
});

gulp.task('fileinclude', ['concatlatest'], function() {
    gulp.src(['dev/html/**/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dest/'));
})

//建立預視瀏覽器
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('default', function() {
    browserSync.init({
        server: {
            //根目錄
            baseDir: "./",
            files: ['**'],
            proxy: 'http://localhost:3000',
            // index: "dest/index/index.html"
            // index: "dest/Back_End/Back_End.html"
            // index: "dest/Epidemic-prevention-SOP/Epidemic-prevention-SOP.html"
            // index: "dest/btn-style/btn-style.html"
            // index: "dest/diseaseHistory/diseaseHistory.html"
            // index: "dest/game/game.html"
            // index: "dest/Epidemic-shop/Epidemic-shop.html"
            // index: "dest/forum/forum.html"
            // index: "dest/member/member.html"
            // index: "dest/infectious-Diseases/infectious-Diseases.hmtl"
            // index: "dest/latest-news/latest-news.html"
            index: "dest/welcome/welcome.html"
            // index: "dest/btn-style/btn-style.html"

        }
    });

    gulp.watch(["sass/*.scss", "sass/**/*.scss", "dev/layout/**/*.scss", "dev/html/**/*.scss"], ['sass']).on('change', reload);
    gulp.watch(["dev/*.html", "dev/**/*.html"], ['fileinclude', 'concatHtml', 'concatimage', 'concatphp', 'concat_icofont']).on('change', reload);
    gulp.watch(["dev/*.js", "dev/**/*.js", "dev/layout/**/*.js"], ['concatjs']).on('change', reload);
});