module.exports = function($scope, $http){
  $scope.stops = [3,4,5,6,7,8,9,10,11,12];
  $scope.numColors = 3;
  $scope.colorbrewer = colorbrewer;
  $scope.d3Colors = {
    category10: d3.scale.category10().range(),
    category20: d3.scale.category20().range(),
    category20b: d3.scale.category20b().range(),
    category20c: d3.scale.category20c().range()
  };

  $scope.showPresets = {
    colorbrewer: false,
    d3: false
  };

  $scope.colors = [];
  $scope.bgColor = {color: '#fff'};
  $scope.charts = [];

  $http.get('charts.json').then(function(response){
    $scope.charts = response.data;
  });

  $scope.addColor = function(){
    $scope.colors.push({
      color: '#fff'
    });
  };

  $scope.togglePreset = function(name){
    $scope.showPresets[name] = !$scope.showPresets[name];
  };

  $scope.selectPalette = function(palette){
    $scope.colors = palette.map(function(d){return {color: d};});
  };

  $scope.selectPalette($scope.d3Colors.category10);
};