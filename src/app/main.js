angular.module('app', ['ngVega', 'app.templates'])
  .controller('mainCtrl', require('./main-controller.js'))
  .directive('colorPicker', require('./colorPicker.js'))
  .directive('colorLegend', require('./colorLegend.js'))
  .directive('visPreview', require('./visPreview.js'));