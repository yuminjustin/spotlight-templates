var gulp = require('gulp');
var replace = require('gulp-replace');
var uglyfly = require('gulp-uglyfly');
var clean = require('gulp-clean');
var config = require('./build/config');

var root = config.build.gulpPath;

gulp.task('replace', function () {
    gulp.src('temp/static/js/*.js')
        .pipe(replace('.catch(', "['catch'](")) // 解决IE不兼容
        .pipe(uglyfly())
        .pipe(gulp.dest(root+'/static/js/'));
});

gulp.task('copy', ['replace'], function () {
    gulp.src('temp/index.html').pipe(gulp.dest(root+'/'));
    gulp.src('temp/static/css/*').pipe(gulp.dest(root+'/static/css/'));
    gulp.src('temp/static/js/*.map').pipe(gulp.dest(root+'/static/js/'));
    gulp.src('temp/static/image/*').pipe(gulp.dest(root+'/static/image/'));
});

gulp.task('rm', ['copy'], function () { // 删除临时文件
    gulp.src('temp', {  read: false  }).pipe(clean());
})


gulp.task('default', ['replace', 'copy', 'rm'], function () {
    console.log('打包成功.')
});
