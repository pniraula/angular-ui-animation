angular
  .module("angularUiAnimation.flip.flipIn", [])
  .directive("flipIn", ['$timeout', 'util', function($timeout, util){
    return {
          restrict: 'EA',
          scope:false,
          link:function(scope, element, attr){
            var duration = util.attr(element,'duration')||300;
            var direction =  util.attr(element,'direction')||'vertical';
            var when = util.attr(element, 'when')||'init';
            when = when.split(",");
            console.log(when);
            var animation = function(){
                util.css(element, 'animationDuration', duration/1000+'s');
                element.addClass('au-flip-in');
                element.addClass(direction);
                $timeout(function () {
                  element.removeClass('au-flip-in');
                  element.removeClass(direction);
              }, duration);
            }
            for(var i in when){
              if(when[i] === 'init'){
                animation();
              }else{
                element.bind(when[i], animation);
              }
            }
          }
      };
  }]);
