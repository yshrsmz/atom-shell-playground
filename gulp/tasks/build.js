'use strict';

var gulp = require('gulp');
var config = require('../config').watch;

gulp.task('build', ['babel', 'styles', 'html', 'electron'], function() {
    gulp.src(config.src);
});
