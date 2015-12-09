angular.module("angularUiAnimation",
      ['angularUiAnimation.fly',
      'angularUiAnimation.util',
      'angularUiAnimation.flip']);

angular
  .module("angularUiAnimation.flip.flipIn", [])
  .directive("flipIn", ['$timeout', 'util', function($timeout, util){
    return {
          restrict: 'EA',
          scope:false,
          link:function(scope, element, attr){
            var duration = util.attr(element,'duration')||300;
            var direction =  util.attr(element,'direction')||'vertical';
            util.css(element, 'animationDuration', duration/1000+'s');
            element.addClass('au-flip-in');
            element.addClass(direction);
              $timeout(function () {
                element.removeClass('au-flip-in');
                element.removeClass(direction);
              }, duration);
          }
      };
  }]);

angular
  .module("angularUiAnimation.flip", ['angularUiAnimation.flip.flipIn']);

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

angular
  .module("angularUiAnimation.fly", ['angularUiAnimation.fly.flyIn']);

angular.module("angularUiAnimation.util",[])
  .factory('util',function(){
    var self = this;
    self.css = function (el, attr, value){
      var element = el[0];
      if(value){
        element.style[attr] = value;
      }
      return element.style[attr];
    };
    self.attr = function(el, attr, value){
      var element = el[0];
      if(value){
        element.setAttribute(attr, value);
      }
      return element.getAttribute(attr);
    }
    return self;
  });
