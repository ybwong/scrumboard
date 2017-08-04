var React = require('react');
var ReactDOM = require('react-dom');
var Board = require('./components/Board.react');
var observe = require('./components/Utils').observe;

observe(function(cardPosition) {
    ReactDOM.render(
        <Board cardPosition={cardPosition} />,
        document.getElementById('react-application')
    );
});
