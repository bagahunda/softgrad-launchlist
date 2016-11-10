'use strict'

const gulp = require('gulp');
const $    = require('gulp-load-plugins')();

module.exports = function(options) {
  return function() {
    return gulp
      .src(options.src)
      .pipe($.plumber())
      .pipe($.w3cjs())
      .pipe($.w3cjs.reporter());
  };
};
