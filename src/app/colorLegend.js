module.exports = function (){
  return {
    restrict: 'AE',
    replace: true,
    templateUrl: 'colorLegend.html',
    scope:{
      legendColors: '=',
      leftText: '=',
      rightText: '='
    },
    // controller: function($scope){

    // },
    link: function(scope, elements, attrs) {

    }
  };
};