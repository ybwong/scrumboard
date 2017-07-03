var React = require("react");

var divStyle = {
  resize: 'none'
};

var Card = React.createClass({
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
              <div className="panel panel-default">
                <div className="panel-body">
                  <textarea type="text" className="card" />
                </div>
                <div className="panel-footer">
                  <textarea type="text" style={divStyle} />
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <h3>Column 2</h3>
              <p>Lorem ipsum dolor....</p>
              <p>Ut enim ad..</p>
            </div>
            <div className="col-sm-4">
              <h3>Column 3</h3>
              <p>Lorem ipsum dolor..</p>
              <p>Ut enim ad..</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
module.exports = Card;
