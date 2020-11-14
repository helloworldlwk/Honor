const gulp=require('gulp');

//处理静态文件
const htmlmin = require('gulp-htmlmin');
gulp.task('copy-html',function(){
    return gulp.src('*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist/'))
    .pipe(connect.reload());

})

gulp.task('images',function(){
    return gulp.src('images/**/*.{jpg,png}')
    .pipe(gulp.dest('dist/images'))
    .pipe(connect.reload());

})

gulp.task('data',function(){
    return gulp.src(['*.json','!package.json'])
    .pipe(gulp.dest('dist/data'))
    .pipe(connect.reload());

})

gulp.task('scripts',function(){
    return gulp.src(['*.js','!gulpfile.js'])
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload());

})

const sass=require('gulp-sass')
sass.compiler = require('node-sass');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
gulp.task('scss',function(){
    return gulp.src('stylesheet/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename(function(path){
        path.basename += '.min'
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());

})

//一次性执行
gulp.task('build',['copy-html','images','data','scripts','scss'],function(){
    console.log('项目建立成功')
})

//启动监听
gulp.task('watch',function(){
    gulp.watch('*.html',['copy-html'])
    gulp.watch('*.{jpg,png}',['images']);
    gulp.watch(['*.json','!package.json'],['data']);
    gulp.watch(['*.js','!gulpfile.js'],['scripts']);
    gulp.watch('./stylesheet/*.scss',['scss']);
})


//启动服务器
const connect=require('gulp-connect')
gulp.task('server',function(){
    connect.server({
        root:'dist',
        port:8888,
        livereload:true
    })
})


//创建默认任务，同时启动监听和服务器
gulp.task('default',['watch','server']);





