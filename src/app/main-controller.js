'use strict';

var charts = require('../data/charts.json');
var palettes = require('./palettes.js');

module.exports = function($scope){
  $scope.stops = d3.range(3, 12, 1);
  $scope.types = ['sequential', 'diverging', 'categorical'];

  $scope.numColors = 3;
  $scope.scaleType = 'sequential';
  $scope.bgColor = {color: '#fff'};
  $scope.colors = [];

  $scope.charts = charts;
  $scope.filteredPalettes = [];

  function filterPalettes(){
    $scope.filteredPalettes = palettes.filter(function(palette){
      return palette.type===$scope.scaleType && (!palette.numColors || palette.numColors===$scope.numColors);
    });
  }

  $scope.$watch('numColors', filterPalettes);
  $scope.$watch('scaleType', filterPalettes);

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

  $scope.$watch('colors', function(colors){
    $scope.colorText = colors.map(function(d){return d.color;}).join(',');
  }, true);

  $scope.parseColors = function(){
    $scope.colors = $scope.colorText.split(',').map(function(d){return {color: d};});
  };

  $scope.removeColor = function(index){
    $scope.colors.splice(index, 1);
  };

};