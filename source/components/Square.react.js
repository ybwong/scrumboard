var React = require('react');
var Card = require('./Card.react');
var Button = require('./Button.react');
var ItemTypes = require('./ItemTypes.react');
var DropTarget = require('react-dnd').DropTarget;
var moveCard = require('./Utils').moveCard;
var Model = require('./Model.react');

var squareTarget = {
    drop: function(props, monitor) {
        moveCard(props.x, props.y);
        if (Model.squares[props.y][props.x]) {
            ++Model.squares[props.y][props.x];
        } else {
            Model.squares[props.y][props.x] = 1;
        }
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
}

var Square = React.createClass({
    handleClick: function() {
        if (Model.squares[this.props.y][this.props.x]) {
            ++Model.squares[this.props.y][this.props.x];
        } else {
            Model.squares[this.props.y][this.props.x] = 1;
        }
        this.setState({});
    },

    handleDrag: function() {
        --Model.squares[this.props.y][this.props.x];
    },

    renderCard: function() {
        return (
            <Card
                className="card"
                handleDrag={this.handleDrag.bind(this)}
            />
        );
    },

    render: function() {
        var connectDropTarget = this.props.connectDropTarget;

        {
            /* Add button in the first column */
        }
        var button = this.props.x === 0 && this.props.y === 0
            ? <Button handleButtonClick={this.handleClick.bind(this)} />
            : null;

        var cards = [];

        for (let i = 0; i < Model.squares[this.props.y][this.props.x]; i++) {
            cards.push(this.renderCard());
        }

        return connectDropTarget(
            <div className="col-sm-2 square">
                {button} {cards}
            </div>
        );
    }
});
module.exports = DropTarget(ItemTypes.CARD, squareTarget, collect)(Square);
