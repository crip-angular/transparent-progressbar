var gulp = require('gulp'),
    crip = require('cripweb');

crip.scripts([
        '**/*.module.js',
        '**/*.js'],
    'transparent-progressbar',
    'scripts',
    'resources',
    'build');

crip.scripts([
        'crip-core.js',
        'transparent-progressbar.js'],
    'transparent-progressbar.all',
    'scripts-full',
    'build',
    'build');

crip.copy(
    'bower_components/crip-angular-core/build/*.js',
    'build',
    'copy-core-scripts');

gulp.task('default', function () {
    crip.gulp.start('crip-default');
    crip.watch();
});