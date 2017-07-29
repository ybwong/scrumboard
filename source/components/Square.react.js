var React = require("react");
var Card = require("./Card.react");

var Square = React.createClass({
	propTypes: {},

	render: function() {
		return (
			<div className="col-sm-2">
				<Card />
			</div>
		);
	}
});
module.exports = Square;
