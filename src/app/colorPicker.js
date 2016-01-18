module.exports = function($http){
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="color-picker" ng-style="{\'background-color\': color.color}"><input type="text" ng-model="color.color"></div>',
    scope: {
      color: '='
    },
    link: function(scope, elements, attrs) {
    }
  };
};