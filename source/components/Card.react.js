// <textarea type="text" style={divStyle} />
// var divStyle = {
//   resize: "none"
// };

var React = require('react');
var ItemTypes = require('./ItemTypes.react');
var DragSource = require('react-dnd').DragSource;

var cardSource = {
    beginDrag: function(props) {
        return {};
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}

var Card = React.createClass({
    // propTypes: {
    // 	connectDragSource: React.PropTypes.func.isRequired,
    // 	isDragging: React.PropTypes.bool.isRequired
    // },

    render: function() {
        var connectDragSource = this.props.connectDragSource;
        var isDragging = this.props.isDragging;

        return connectDragSource(
            <div
                style={{
                    opacity: isDragging ? 0.5 : 1,
                    fontSize: 12,
                    fontWeight: 'bold',
                    cursor: 'move'
                }}
            >
                <textarea type="text" className="cardContent" />
                <textarea type="text" className="cardFooter" />
            </div>
        );
    }
});

module.exports = DragSource(ItemTypes.CARD, cardSource, collect)(Card);
