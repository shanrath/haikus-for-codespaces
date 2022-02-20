import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

exports.default = () => (
	gulp.src('./raw_images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./public/images'))
);