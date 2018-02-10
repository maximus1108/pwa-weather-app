var gulp = require('gulp');
var watch = require('gulp-watch');
var server = require('browser-sync').create();

gulp.task('default', ['serve'], function(){
  return watch("./dist/**/*.*").on('change', server.reload)

})

gulp.task('serve', function(){
    server.init({
        server: {
            baseDir: "./dist"
        }
    });
})