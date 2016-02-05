var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    handlebars = require('gulp-handlebars'),
    wrap = require('gulp-wrap'),
    declare = require('gulp-declare'),
    concat = require('gulp-concat'),
    defineModule = require('gulp-define-module'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch')
    colors = require("colors");

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'red',
    info: 'green',
    data: 'blue',
    help: 'cyan',
    warn: 'yellow',
    debug: 'magenta',
    error: 'red'
});

var watchLog = function (event) {
    console.log('File ' + event.path + ' was changed ');
}//文件修改

gulp.task('templates', function(){
    gulp.src('components/**/*.hbs')
        .pipe(watch('components/**/*.hbs',function(event){
            watchLog(event);
        }))
        .pipe(handlebars())
        //.pipe(wrap('Handlebars.template(<%= contents %>)'))
        //.pipe(declare({
        //    namespace: 'MyApp.templates',
        //    noRedeclare: true // Avoid duplicate declarations
        //}))
        .pipe(defineModule('amd'))
        .pipe(rename({dirname: ''}))
        //去掉文件夹，直接在dest指定的文件目录输出
        //.pipe(concat('templates.js'))
        //.pipe(gulp.dest('../dist/static/js'));
        // Write the output into the templates folder
        .pipe(gulp.dest('../dist/static/js/templates/'));


    gulp.src('views/**/*.hbs')
        .pipe(watch('views/**/*.hbs',function(event){
            watchLog(event);
        }))
        .pipe(gulp.dest('../dist/views/'));
});


gulp.task('minify-js', function () {
    //gulp.src(['static/js/main.js','static/js/test/test.js'])
    gulp.src('static/**/*.js')
        .pipe(watch('static/**/*.js',function(event){
            watchLog(event);
        }))
        //.pipe(concat('main.js'))
        //.pipe(uglify())//压缩
        .pipe(gulp.dest('../dist/static'));
    //gulp.src('static/js/libs/*.js')
    //    .pipe(gulp.dest('../dist/static/js/libs'));
});
//js产出


gulp.task('images',function(){
    var imgSrc = './static/images/**/*',
        imgDst = '../dist/static/images';
    gulp.src(imgSrc)
        .pipe(watch(imgSrc,function(event){
            watchLog(event);
        }))
        .pipe(gulp.dest(imgDst));
});
//图片产出


gulp.task('minify-css', function () {
    gulp.src('./static/css/*.css')
        .pipe(watch('static/css/*.css',function(event){
            watchLog(event);
        }))
        .pipe(gulp.dest('../dist/static/css'));
});
//css产出

gulp.task('fonts',function(){
    gulp.src('./static/fonts/*')
        .pipe(watch('static/fonts/*',function(event){
            watchLog(event);
        }))
        .pipe(gulp.dest('../dist/static/fonts'));
});

gulp.task('default',['templates','minify-js','minify-css','images','fonts'],function(){
    console.log('++++++++++++++构建完成+++++++++++++'.info);
});