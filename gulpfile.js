// --------------------------------------------------------------------
// Plugins
// --------------------------------------------------------------------

var gulp        = require("gulp"),
	jade		= require("gulp-jade"),
	sass        = require("gulp-sass"),
	plumber     = require("gulp-plumber"),
	prefix      = require("gulp-autoprefixer"),
	image		= require("gulp-image"),
	uglify 		= require('gulp-uglify'),
	cleanCSS	= require('gulp-clean-css'),
	config 		= require('./config.json'), // external config file
	browserSync = require("browser-sync").create();


// --------------------------------------------------------------------
// Settings
// --------------------------------------------------------------------

var code 	= config.code;
var output 	= config.output;
var uri 	= config.config;


// --------------------------------------------------------------------
// Error Handler
// --------------------------------------------------------------------

var onError = function(err) {
	console.log(err);
	this.emit('end');
};


// --------------------------------------------------------------------
// Task: Image
// --------------------------------------------------------------------

gulp.task('image', function () {

  return gulp.src(code.img)
	.pipe(plumber({
	  errorHandler: onError
	}))
	.pipe(image())
    .pipe(gulp.dest(output.img));
});


// --------------------------------------------------------------------
// Task: Compress / Ugligy
// --------------------------------------------------------------------

gulp.task('minify', function() {

  return gulp.src(code.js)
	.pipe(plumber({
		errorHandler: onError
	}))
	.pipe(uglify())
    .pipe(gulp.dest(output.js))
});

// --------------------------------------------------------------------
// Task: Sass
// --------------------------------------------------------------------

gulp.task('sass', function() {

	return gulp.src(code.sass)
		.pipe(plumber({
			errorHandler: onError
		}))
		.pipe(sass({
			includePaths: ['css'],
			outputStyle: 'expanded',
			onError: browserSync.notify
		}))
		.pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
		.pipe(gulp.dest(output.css))
		.pipe(browserSync.stream())
		.pipe(gulp.dest(code.cssOut));
});


// --------------------------------------------------------------------
// Task: Compress CSS
// --------------------------------------------------------------------

gulp.task('compress-css', function() {
	return gulp.src(code.cssIn)
		.pipe(plumber({
			errorHandler: onError
		}))
		.pipe(cleanCSS({compatibility: 'ie9'}))
		.pipe(gulp.dest(output.css));
});


// --------------------------------------------------------------------
// Task: Jade
// --------------------------------------------------------------------

gulp.task('jade', function() {

	return gulp.src(code.jade)
		.pipe(plumber({
			errorHandler: onError
		}))
		.pipe(jade({pretty: true}))
		.pipe(gulp.dest(uri.devUrl))
		.pipe(browserSync.stream());
});


// --------------------------------------------------------------------
// Task: JS Move
// --------------------------------------------------------------------

gulp.task('js-move', function() {

	return gulp.src(code.js)
		.pipe(plumber({
			errorHandler: onError
		}))
		.pipe(gulp.dest(output.js))
		.pipe(browserSync.stream());
})

// --------------------------------------------------------------------
// Task: Browser Sync Server
// --------------------------------------------------------------------

gulp.task('serve', ['sass', 'jade', 'image', 'js-move'], function() {
	browserSync.init({
		server: {
			baseDir: uri.devUrl
		}
	});
});


// --------------------------------------------------------------------
// Task: Watch
// --------------------------------------------------------------------

gulp.task('watch', function() {
	gulp.watch(code.jade, ['jade']);
	gulp.watch(code.sass, ['sass']);
	gulp.watch(code.img, ['image']);
	gulp.watch(code.js, ['js-move']);
	gulp.watch(uri.devUrl).on('change', browserSync.reload);
});


// --------------------------------------------------------------------
// Task: Build Project
// --------------------------------------------------------------------

gulp.task('build', ['minify', 'compress-css']);


// --------------------------------------------------------------------
// Task: Default
// --------------------------------------------------------------------

gulp.task('default', ['serve','watch']);
