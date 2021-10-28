const gulp = import('gulp');
const imagemin = import('gulp-imagemin');

exports.default = () => (
	gulp.src('./raw_images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./public/images'))
);