'use strict';

var colorbrewer = require('exports?colorbrewer!colorbrewer');

var palettes = [];
Object.keys(colorbrewer).forEach(function(name){
  Object.keys(colorbrewer[name]).forEach(function(numColors){
    palettes.push({
      group: 'ColorBrewer',
      name: name,
      numColors: +numColors,
      colors: colorbrewer[name][numColors]
    });
  });
});

['category10', 'category20', 'category20b', 'category20c'].forEach(function(name){
  palettes.push({
    group: 'D3',
    name: name,
    colors: d3.scale[name]().range()
  });
});

palettes.forEach(function(d,i){
  d.index = i;
});

module.exports = palettes;