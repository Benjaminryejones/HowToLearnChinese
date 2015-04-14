var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-ruby-sass');

gulp.task('default', ['scripts', 'watch']);

// Scripts Task
// Uglifies JS
gulp.task('scripts', function(){
	// Source files
	gulp.src('js/*.js')
	.pipe(uglify())
	// Output folder
	.pipe(gulp.dest('!-Build/JS/'));
});

// Watch Task
// Watches JS
gulp.task('watch', function(){
	// Watch files location, then run the follow scripts
	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('CSS/**/*.scss', ['styles']);
});

// Styles Task
// Compiles CSS/Sass
gulp.task('styles', function(){
	// Source
	return sass('CSS/style.scss', {
		style: 'compressed',
	})
	// Destination
	.pipe(gulp.dest('!-Build/CSS/'));
});

