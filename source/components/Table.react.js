var DomRender = require('dom-render');


DomRender.createClass({
	renderEntry: function(x,y) {

	var entries;
	for (i=0; i<5; i++)
	{
		entries.push(this.renderTable);
	}
},

    render: function() {
        return <table> <tbody> 
        <tr>
        {this.props.children}
        </tr>
        <tr>
        </tr>
        </tbody></table>;
    }
});
