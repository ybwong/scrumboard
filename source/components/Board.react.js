var React = require('react');
var Card = require('./Card.react');
var Square = require('./Square.react');
var Button = require('./Button.react');
var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd-html5-backend');

var Board = React.createClass({
  renderSquare: function(x, y) {
    var cardX = this.props.cardPosition[0];
    var cardY = this.props.cardPosition[1];

    var card = x === cardX && y === cardY ? <Card /> : null;
    var button = x === 0 && y === 0 ? <Button /> : null;

    return (
      <Square className="square" x={x} y={y} cardX={cardX} cardY={cardY}>
        {/*{button} {card} */}
      </Square>
    );
  },

  render: function() {
    var squares = [];
    for (let i = 0; i < 6; i++) {
      squares.push(this.renderSquare(i, 0));
    }

    return (
      <div>
        {/* Board */}
        <div className="jumbotron text-center">
          <h1>My First Bootstrap Page</h1>
          <p>Resize this responsive page to see the effect!</p>
        </div>
        <div className="board">
          {squares}
        </div>
      </div>
    );
  }
});

module.exports = DragDropContext(HTML5Backend)(Board);
