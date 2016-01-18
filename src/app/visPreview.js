module.exports = function($http){
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="vis-preview"><div vega spec="spec" vega-renderer="\'canvas\'"></div></div>',
    scope: {
      config: '=',
      colors: '='
    },
    link: function(scope, elements, attrs) {
      function update(){
        var config = scope.config;

        $http.get(scope.config.spec).then(function(result){
          var updatedSpec = result.data;

          // find color scale
          var scale = updatedSpec.scales.filter(function(d){return d.name==config.scaleName;});
          if(scale.length>0){
            scale = scale[0];

            // update... do sth.
            var colors = scope.colors.map(function(d){return d.color;});
            scale.range = colors;
          }

          scope.spec = updatedSpec;
        });
      }

      scope.$watch('config', function(config){
        update();
      }, true);
      scope.$watch('colors', function(colors){
        update();
      }, true);
    }
  };
};