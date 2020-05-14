//使用require 引用
var cleanCSS = require('gulp-clean-css');
gulp = require('gulp');
rename = require("gulp-rename");
del = require('del');
sass = require('gulp-sass');
watch = require('gulp-watch');
fileinclude = require('gulp-file-include');

//搬家
gulp.task('concatjs', function() {
    //do sometime
    gulp.src('./dev/JS/**/*').pipe(gulp.dest('./dest/js'))
});
gulp.task('concatimage', function() {
    //do sometime
    gulp.src('./dev/image/**/*').pipe(gulp.dest('./dest/image'))
});
// gulp.task('concatphp', function () {
//     //do sometime
//     gulp.src('./dev/PHP/**/*.php').pipe(gulp.dest('./dest/PHP'))
// });
gulp.task('concatfont', function () {
    //do sometime
    gulp.src('./dev/layout/fonts/**/*').pipe(gulp.dest('./dest/fonts'))
});
gulp.task('concatlayput', function() {
    //do sometime
    gulp.src('./dev/layout/**/*').pipe(gulp.dest('./dest/Epidemic-shop/icofont'))
});
gulp.task('concatphp', function() {
    //do sometime
    gulp.src('./dev/PHP/**/*.php').pipe(gulp.dest('./dest/PHP'))
});
//編譯scss


gulp.task('sass', function() {
    gulp.src('./dev/SASS/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dest/css'))
});


//壓縮檔案
gulp.task('minicss', ['sass'], function() {
    gulp.src('dest/CSS/*.css')
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

// gulp.task('fileinclude', ['concatlatest'], function() {
//     gulp.src(['dev/html/**/*.html'])
//         .pipe(fileinclude({
//             prefix: '@@',
//             basepath: '@file'
//         }))
//         .pipe(gulp.dest('dest/'));
// })
gulp.task('fileinclude', function() {
    gulp.src(['dev/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./dest'));
})

//建立預視瀏覽器
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('default', function() {
    // browserSync.init({
        // server: {
            //根目錄
            // baseDir: "./",
            // files: ['**'],
            // proxy: 'http://localhost:3005 ',
            // index: "dest/homepage.html"
            // index: "dest/Back_End.html"
            // index: "dest/Epidemic-prevention-SOP.html"
            // index: "dest/btn-style.html"
            // index: "dest/diseaseHistory.html"
            // index: "dest/game.html"
            // index: "dest/Epidemic-shop.html"
            // index: "dest/forum.html"
            // index: "dest/member.html"
            // index: "dest/infectious-Diseases.hmtl"
            // index: "dest/latest-news.html"
            // index: "dest/latest-news_child.html"
            // index: "dest/index.html"
            // index: "dest/btn-style.html"
            // index: "dest/header.html"
            // index: "dest/footer.html"
    //     }
    // });

    gulp.watch(["dev/sass/*.scss", "dev/sass/**/*.scss", "dev/layout/**/*.scss"], ['sass']).on('change', reload);
    gulp.watch(["dev/*.html", "dev/**/*.html"], ['fileinclude', 'concatimage']).on('change', reload);
    gulp.watch(["dev/*.js", "dev/**/*.js", "dev/layout/**/*.js"], ['concatjs']).on('change', reload);
    gulp.watch(["dev/**/*.php"], ['concatphp']).on('change', reload);
  
});
