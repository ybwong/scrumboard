var React = require("react");
var Card = require("./Card.react");
var Square = require("./Square.react");

var Board = React.createClass({
  render: function() {
    return (
      <div>
        <div className="jumbotron text-center">
          <h1>My First Bootstrap Page</h1>
          <p>Resize this responsive page to see the effect!</p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <Card />
            </div>
            <div className="col-sm-2">
              <Card />
            </div>
            <div className="col-sm-2">
              <Card />
            </div>
            <div className="col-sm-2">
              <Card />
            </div>
            <div className="col-sm-2">
              <Card />
            </div>
            <Square />
          </div>
        </div>
      </div>
    );
  }
});
module.exports = Board;
