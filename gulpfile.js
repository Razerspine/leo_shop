var gulp = require("gulp");
var less = require("gulp-less");
var watch = require("gulp-watch");
var debug = require("gulp-debug");

gulp.task("less", function () {
   return gulp.src("css/**/*.less")
       .pipe(debug())
       .pipe(less())
       .pipe(debug())
       .pipe(gulp.dest("css"))
});

gulp.task("watch", function () {
   gulp.watch("css/**/*.less" ["less"])
});