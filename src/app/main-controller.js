'use strict';

var charts = require('../data/charts.json');
var palettes = require('./palettes.js');

module.exports = function($scope){
  $scope.stops = d3.range(3, 12, 1);

  $scope.numColors = 3;
  $scope.bgColor = {color: '#fff'};
  $scope.colors = [];

  $scope.charts = charts;
  $scope.filteredPalettes = [];

  function filterPalettes(){
    $scope.filteredPalettes = palettes.filter(function(palette){
      return !palette.numColors || palette.numColors===$scope.numColors;
    });
  }

  $scope.$watch('numColors', filterPalettes);

  $scope.addColor = function(){
    $scope.colors.push({
      color: '#fff'
    });
  };

  $scope.togglePreset = function(name){
    $scope.showPresets[name] = !$scope.showPresets[name];
  };

  $scope.selectPalette = function(palette){
    $scope.colors = palette.colors.map(function(d){return {color: d};});
  };

  $scope.selectPalette(palettes[0]);
};