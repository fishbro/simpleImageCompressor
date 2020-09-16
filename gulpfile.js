const gulp = require('gulp'), //господин гульп
  // imageResize = require('gulp-image-resize'),
  imagemin     = require('gulp-imagemin'),
  imgCompress  = require('imagemin-jpeg-recompress');

// gulp.task('titans_heroes_arts', function () {
//   gulp.src('src/**/*.{jpg,png}')
//     .pipe(imageResize({
//       width : 333,
//       height : 495,
//       crop : true,
//       upscale : false,
//       imageMagick: true
//     }))
//     .pipe(gulp.dest('dist'));
// });

gulp.task('img', function() {
  return gulp.src('src/**/*')
    .pipe(imagemin([
      imgCompress({
        loops: 4,
        min: 80,
        max: 95,
        quality: 'high'
      }),
      imagemin.gifsicle(),
      imagemin.optipng(),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest('dist'));
});