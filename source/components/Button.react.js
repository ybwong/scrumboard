var React = require('react');

var Button = React.createClass({
    render: function() {
        return <button type="button" className="btn" onClick={this.props.handleButtonClick}> + </button>;
    }
});

module.exports = Button;