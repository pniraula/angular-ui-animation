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
