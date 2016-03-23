(function (ng, crip) {
    'use strict';

    crip.transparentProgressbar =
        ng.module('transparent-progressbar', [
            'crip.core'
        ]);

})(angular, window.crip || (window.crip = {}));