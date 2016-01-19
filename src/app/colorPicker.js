module.exports = function($http){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'colorPicker.html',
    scope: {
      color: '=',
      onRemove: '&'
    },
    link: function(scope, elements, attrs) {
      scope.removeClick = function(){
        if(scope.onRemove()){
          scope.onRemove()();
        }
      };
    }
  };
};