'use strict';

const gulp = require('gulp'),
  minimist = require('minimist'),
  rename = require('gulp-rename'),
  tslint = require('gulp-tslint'),
  replace = require('gulp-replace'),
  _ = require('lodash');

const flagConfig = {
    string: ['port', 'version', 'ngVersion', 'animations'],
    boolean: ['dry-run'],
    alias: { p: 'port', v: 'version', a: 'ngVersion' },
    default: { port: 8000 },
  },
  flags = minimist(process.argv.slice(2), flagConfig);

gulp.task('lint', () => {
  return gulp
    .src('src/**/*.ts')
    .pipe(
      tslint({
        formatter: 'verbose',
        configuration: 'tslint.json',
      })
    )
    .pipe(tslint.report());
});

gulp.task('copyPackageJson', () => {
  return gulp.src('./package.json').pipe(gulp.dest('./dist/'));
});

gulp.task('copyReadme', () => {
  return gulp.src('./README.md').pipe(gulp.dest('./dist/'));
});
