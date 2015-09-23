/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Index = require("./app/views/index.js");

var {
  AppRegistry
} = React;

var v2ex_client = React.createClass({
  render: function() {
    return (
      <Index></Index>
    );
  }
});

AppRegistry.registerComponent('v2ex_client', () => v2ex_client);
