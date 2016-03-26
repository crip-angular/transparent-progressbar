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

crip.copy(['./**/*', '!./gulpfile.js', '!./node_modules{,/**}', '!./bower_components{,/**}'],
    '../../crip-laravel/boilerplate/packages/filemanager/bower_components/crip-transparent-progressbar',
    'copy-for-filemanager',
    '');

gulp.task('default', function () {
    crip.gulp.start('crip-default');
    crip.watch();
});