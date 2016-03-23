(function (crip) {
    'use strict';

    crip.transparentProgressbar
        .directive('CripProgressbar', CripProgressbar);

    CripProgressbar.$inject = [];

    function CripProgressbar() {
        return {
            restrict: 'A',
            link: link,
            scope: {
                progress: '=cripProgressbar'
            },
        };

        function link(scope, element, attr, ctrls) {
            element.addClass('crip-transparent-progressbar');

            element.append('<span class="progressbar-back-drop" style="width: 100%"></span>');

            scope.$watch(attr.progress, onProgressChange);

            function onProgressChange(value, old) {
                element
                    .find('progressbar-back-drop')
                    .css('width', (100 - value) + '%');
            }
        }
    }

})(window.crip);