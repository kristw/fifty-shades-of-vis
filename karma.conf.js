// Karma configuration
'use strict';

var _ = require('lodash');
var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '.',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // each file acts as entry point for the webpack configuration
    files: [
      // all files ending in ".spec.js"
      'src/app/**/*.spec.js'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/app/**/*.spec.js': ['webpack', 'sourcemap']
    },

    webpack: _.extend({}, webpackConfig, {
      devtool: 'inline-source-map'
    }),

    // test results reporter to use
    // possible values: 'dots', 'progress', 'mocha', 'coverage'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // // enable / disable watching file and executing tests whenever any file changes
    // autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      'PhantomJS',
      // 'Chrome',
      // 'Firefox'
    ]

  });
};
