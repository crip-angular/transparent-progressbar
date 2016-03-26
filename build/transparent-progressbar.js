(function (ng, crip) {
    'use strict';

    crip.transparentProgressbar =
        ng.module('crip.transparent-progressbar', []);

})(angular, window.crip || (window.crip = {}));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zcGFyZW50LXByb2dyZXNzYmFyLm1vZHVsZS5qcyIsImRpcmVjdGl2ZXMvcHJvZ3Jlc3NiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoidHJhbnNwYXJlbnQtcHJvZ3Jlc3NiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKG5nLCBjcmlwKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgY3JpcC50cmFuc3BhcmVudFByb2dyZXNzYmFyID1cclxuICAgICAgICBuZy5tb2R1bGUoJ2NyaXAudHJhbnNwYXJlbnQtcHJvZ3Jlc3NiYXInLCBbXSk7XHJcblxyXG59KShhbmd1bGFyLCB3aW5kb3cuY3JpcCB8fCAod2luZG93LmNyaXAgPSB7fSkpOyIsIihmdW5jdGlvbiAobmcsIGNyaXApIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBjcmlwLnRyYW5zcGFyZW50UHJvZ3Jlc3NiYXJcclxuICAgICAgICAuZGlyZWN0aXZlKCdjcmlwUHJvZ3Jlc3NiYXInLCBjcmlwUHJvZ3Jlc3NiYXIpO1xyXG5cclxuICAgIGNyaXBQcm9ncmVzc2Jhci4kaW5qZWN0ID0gWyckbG9nJywgJyRkb2N1bWVudCddO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNyaXBQcm9ncmVzc2JhcigkbG9nLCAkZG9jdW1lbnQpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZXN0cmljdDogJ0EnLFxyXG4gICAgICAgICAgICBsaW5rOiBsaW5rLFxyXG4gICAgICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6ICc9Y3JpcFByb2dyZXNzYmFyJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGlyZWN0aXZlIGxpbmtcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSBzY29wZVxyXG4gICAgICAgICAqIEBwYXJhbSBlbGVtZW50XHJcbiAgICAgICAgICogQHBhcmFtIGF0dHJcclxuICAgICAgICAgKiBAcGFyYW0gY3RybHNcclxuICAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRyLCBjdHJscykge1xyXG4gICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKCdjcmlwLXRyYW5zcGFyZW50LXByb2dyZXNzYmFyJyk7XHJcbiAgICAgICAgICAgICRsb2cuZGVidWcoJ2NyaXAnLCBzY29wZSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgJHByb2dyZXNzID0gbmcuZWxlbWVudCgkZG9jdW1lbnRbMF0uY3JlYXRlRWxlbWVudCgnc3BhbicpKTtcclxuICAgICAgICAgICAgJHByb2dyZXNzLmFkZENsYXNzKCdjcmlwLXByb2dyZXNzYmFyJyk7XHJcbiAgICAgICAgICAgICRwcm9ncmVzcy5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJ2JvdHRvbSc6IDAsXHJcbiAgICAgICAgICAgICAgICAnZGlzcGxheSc6ICdibG9jaycsXHJcbiAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgJ3JpZ2h0JzogMCxcclxuICAgICAgICAgICAgICAgICd0b3AnOiAwLFxyXG4gICAgICAgICAgICAgICAgJ3dpZHRoJzogJzEwMCUnXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKFsnc3RhdGljJywgJ2luaXRpYWwnLCAnaW5oZXJpdCddLmluZGV4T2YoZWxlbWVudC5jc3MoJ3Bvc2l0aW9uJykpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNzcygncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKFsnaW5saW5lJ10uaW5kZXhPZihlbGVtZW50LmNzcygnZGlzcGxheScpKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kKCRwcm9ncmVzcyk7XHJcblxyXG4gICAgICAgICAgICBzY29wZS4kd2F0Y2goJ3Byb2dyZXNzJywgb25Qcm9ncmVzc0NoYW5nZSk7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogUmVhY3Qgb24gcHJvZ3Jlc3MgdmFsdWUgY2hhbmdlXHJcbiAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBvblByb2dyZXNzQ2hhbmdlKHZhbHVlLCBvbGQpIHtcclxuICAgICAgICAgICAgICAgICRwcm9ncmVzc1xyXG4gICAgICAgICAgICAgICAgICAgIC5jc3MoJ3dpZHRoJywgKDEwMCAtIHZhbHVlKSArICclJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59KShhbmd1bGFyLCB3aW5kb3cuY3JpcCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
