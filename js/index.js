"use strict"

var React = require('react');
var ReactDOM = require('react-dom');

var Card = require('../js/components').Card;
var List = require('../js/components').List;
var Board = require('../js/components').Board;

document.addEventListener('DOMContentLoaded', function() {
    var listsTitle = ["list 1", "list 2"];
    ReactDOM.render(<Board title="my Board"
                           lists={listsTitle}
    />, document.getElementById('app'));
});
