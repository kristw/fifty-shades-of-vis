'use strict';

// var d3 = require('d3');
var charts = require('../data/charts.json');

module.exports = function($scope){
  $scope.stops = d3.range(3, 12, 1);
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
  $scope.charts = charts;

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