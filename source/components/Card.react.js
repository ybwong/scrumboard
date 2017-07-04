// <textarea type="text" style={divStyle} />
// var divStyle = {
//   resize: "none"
// };

var React = require("react");

var Card = React.createClass({
  render: function() {
    return (
      <div>
        <textarea type="text" className="cardContent" />
        <textarea type="text" className="cardFooter" />
      </div>
    );
  }
});
module.exports = Card;
