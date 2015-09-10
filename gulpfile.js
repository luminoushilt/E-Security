// --------------------------------------------------------------------
// Plugins
// --------------------------------------------------------------------

var gulp        = require("gulp"),
	jade		= require("gulp-jade"),
	sass        = require("gulp-sass"),
	plumber     = require("gulp-plumber"),
	prefix      = require("gulp-autoprefixer"),
	browserSync = require("browser-sync").create(),
	cp 			= require('child_process');

// --------------------------------------------------------------------
// Settings
// --------------------------------------------------------------------

var src = {
	sass: ['Assets/css/1-tools/*.sass', 'Assets/css/2-base/*.sass', 'Assets/css/3-modules/*.sass', 'Assets/css/4-pages/*.sass','Assets/css/*.sass' , 'Assets/css/1-tools/*.scss', 'Assets/css/2-base/*.scss', 'Assets/css/3-modules/*.scss', 'Assets/css/4-pages/*.scss'],
	jade: "_jadefiles/*.jade",
	css: "Assets/css"
};

 var output = {
	css: "_site/Assets/css",
	html: "_includes",
	root: '_site'
};

var messages 	= {jekyllBuild: '<span style="color: grey">Compiling:</span> $ jekyll build'};


// --------------------------------------------------------------------
// Error Handler
// --------------------------------------------------------------------

var onError = function(err) {
	console.log(err);
	this.emit('end');
};


// --------------------------------------------------------------------
// Build the Jekyll Site
// --------------------------------------------------------------------

gulp.task('jekyll-build', function (done) {
    
	browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});


// --------------------------------------------------------------------
// Rebuild Jekyll & do page reload
// --------------------------------------------------------------------

gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    
	browserSync.reload();
});


// --------------------------------------------------------------------
// Task: Sass
// --------------------------------------------------------------------

gulp.task('sass', function() {

	return gulp.src(src.sass)
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
		.pipe(gulp.dest(src.css));
});


// --------------------------------------------------------------------
// Task: Jade
// --------------------------------------------------------------------

gulp.task('jade', function() {

	return gulp.src(src.jade)
		.pipe(plumber({
			errorHandler: onError
		}))
		.pipe(jade({pretty: true}))
		.pipe(gulp.dest(output.html));
});


// --------------------------------------------------------------------
// Task: Browser Sync Server
// --------------------------------------------------------------------

gulp.task('serve', ['sass', 'jade', 'jekyll-build'], function() {
	
	browserSync.init({
		server: {
			baseDir: output.root
		}
	});
});


// --------------------------------------------------------------------
// Task: Watch
// --------------------------------------------------------------------

gulp.task('watch', function() {
	gulp.watch(src.jade, ['jade']);
	gulp.watch(src.sass, ['sass']);
	gulp.watch([output.html, output.root, '_layouts/*.html', 'index.html'], ['jekyll-rebuild']);
	gulp.watch(output.root).on('change', browserSync.reload);
});


// --------------------------------------------------------------------
// Task: Default
// --------------------------------------------------------------------

gulp.task('default', ['serve','watch']);
