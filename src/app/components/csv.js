define([
  'jquery',
  'lodash'
],
function($, _) {
  'use strict';

  var csv = {};

  csv.toString = function(obj) {
    return _.map(obj, function(o) {
      return _.map(o, function(v) {
        var value = v.replace ? v.replace(/"/g, '""') : '';
        return '"' + value + '"';
      }).join(",");
    }).join("\r\n");
  };

  return csv;
});
