var React = require('react')
var Header = require('./Header.jsx')

module.exports = React.createClass({
  'displayName': 'BlankPage.jsx',
	getInitialState: function(){
	    return {
	        isLiked: false,
          text: ":|"
	    };
	},

  likeThis: function() {
  	if (!this.state.isLiked) {
  		this.setState({isLiked: true, text:":)"})
  	}
  },

  render: function () {
    var title = 'This page is under construction';
    var header = <Header title={title} />;
    var likeButton = <button type="button" id="likeButton" onClick={this.likeThis}>{this.state.text}</button>;

    return <div className='Page'>
      {header}
      {likeButton}
    </div>
  }
});
