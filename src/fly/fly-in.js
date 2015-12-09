angular
  .module("angularUiAnimation.fly.flyIn", [])
  .directive("flyIn", ['$timeout', 'util', function($timeout, util){
    return {
          restrict: 'EA',
          scope:false,
          link:function(scope, element, attr){
            var duration = util.attr(element, 'duration')||3000;
            var direction = util.attr(element, 'direction')||'bottom';
            util.css(element, 'animationDuration', duration/1000+'s');
            element.addClass('au-fly-in');
            element.addClass(direction);
              $timeout(function () {
                element.removeClass('au-fly-in');
                element.removeClass(direction);
              }, duration);
          }
      };
  }]);
