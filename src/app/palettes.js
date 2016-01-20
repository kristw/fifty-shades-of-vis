'use strict';

var colorbrewer = require('exports?colorbrewer!colorbrewer');

var palettes = [];

function brewerType(name){
  switch(name){
    case 'PuOr':
    case 'BrBG':
    case 'PRGn':
    case 'PiYG':
    case 'RdBu':
    case 'RdGy':
    case 'RdYlBu':
    case 'Spectral':
    case 'RdYlGn':
      return 'diverging';
    case 'Accent':
    case 'Dark2':
    case 'Paired':
    case 'Pastel1':
    case 'Pastel2':
    case 'Set1':
    case 'Set2':
    case 'Set3':
      return 'categorical';
    default:
      return 'sequential';
  }
}

Object.keys(colorbrewer).forEach(function(name){
  Object.keys(colorbrewer[name]).forEach(function(numColors){
    palettes.push({
      group: 'ColorBrewer',
      name: name,
      numColors: +numColors,
      type: brewerType(name),
      colors: colorbrewer[name][numColors]
    });
  });
});

['category10', 'category20', 'category20b', 'category20c'].forEach(function(name){
  palettes.push({
    group: 'D3',
    name: name,
    colors: d3.scale[name]().range(),
    type: 'categorical'
  });
});

palettes.forEach(function(d,i){
  d.index = i;
});

console.log('palettes', palettes.map(function(d, i){return d.name + ',' + i;}));

module.exports = palettes;