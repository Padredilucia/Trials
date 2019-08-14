const gulp = require('gulp');
const watch = require('gulp-watch');

gulp.task('default', function(){
    console.log('hooray!');
});

gulp.task('html', function(){
    console.log('html processed!');
});

gulp.task('watch', function(){
    watch('./app/index.html', function(){
        gulp.start('html');
    });
});
gulp.task('watch', function(){
    watch('./app/index.html', function(){
        gulp.start('html');
    });
});
const name = "Howard";
const age = 48;
console.log('my name is ${name}, I am ${age} years old');
