'use strict';

import config      from '../config';
import changed     from 'gulp-changed';
import gulp        from 'gulp';
import browserSync from 'browser-sync';

gulp.task('htaccess', function() {

  return gulp.src(config.htaccess.src)
    .pipe(changed(config.htaccess.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.htaccess.dest))
    .pipe(browserSync.stream());

});
