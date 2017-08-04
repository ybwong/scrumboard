var React = require('react');
var Card = require('./Card.react');
var ItemTypes = require('./ItemTypes.react');
var DropTarget = require('react-dnd').DropTarget;
var moveCard = require('./Utils').moveCard;

var squareTarget = {
    drop: function(props, monitor) {
        moveCard(props.x, props.y);
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
}

var Square = React.createClass({
    render: function() {
        var connectDropTarget = this.props.connectDropTarget;

        return connectDropTarget(
            <div className="col-sm-2 square">
                {/*  
                    <div className="col-sm-2" className="square"> {this.props.children} </div>
                */}
                {this.props.children}
            </div>
        );
    }
});
module.exports = DropTarget(ItemTypes.CARD, squareTarget, collect)(Square);
