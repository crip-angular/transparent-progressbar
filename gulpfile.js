var gulp = require('gulp'),
    crip = require('cripweb');

crip.scripts([
        '**/*.module.js',
        '**/*.js'],
    'transparent-progressbar',
    'scripts',
    'resources/js',
    'build');

crip.sass('resources/sass/styles.scss',
    [],
    'compile-sass',
    'transparent-progressbar',
    'build');

gulp.task('default', function () {
    crip.gulp.start('crip-default');
    crip.watch();
});