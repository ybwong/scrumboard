var React = require("react")

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
            <div className="col-sm-4">
              <div class="form-group">
                <input type="text" class="form-control" id="note" />
                <input type="text" class="form-control" id="user" />
              </div>
            </div>;
            <div className="col-sm-4">
              <h3>Column 2</h3>
              <p>Lorem ipsum dolor..</p>
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
    )
  }
})
module.exports = Card
