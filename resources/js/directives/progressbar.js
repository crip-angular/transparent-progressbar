(function (ng, crip) {
    'use strict';

    crip.transparentProgressbar
        .directive('cripProgressbar', cripProgressbar);

    cripProgressbar.$inject = ['$log', '$document'];

    function cripProgressbar($log, $document) {
        return {
            restrict: 'A',
            link: link,
            scope: {
                progress: '=cripProgressbar'
            }
        };

        /**
         * Directive link
         *
         * @param scope
         * @param element
         * @param attr
         * @param ctrls
         */
        function link(scope, element, attr, ctrls) {
            element.addClass('crip-transparent-progressbar');
            $log.debug('crip', scope);

            var $progress = ng.element($document[0].createElement('span'));
            $progress.addClass('crip-progressbar');
            $progress.css({
                'bottom': 0,
                'display': 'block',
                'position': 'absolute',
                'right': 0,
                'top': 0,
                'width': '100%'
            });

            if (['static', 'initial', 'inherit'].indexOf(element.css('position')) != -1) {
                element.css('position', 'relative');
            }

            if (['inline'].indexOf(element.css('display')) != -1) {
                element.css('display', 'inline-block');
            }

            element.append($progress);

            scope.$watch('progress', onProgressChange);

            /**
             * React on progress value change
             *
             * @param {Number} value
             * @param {Number} old
             */
            function onProgressChange(value, old) {
                $progress
                    .css('width', (100 - value) + '%');
            }
        }
    }

})(angular, window.crip);