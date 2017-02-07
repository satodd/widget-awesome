var React = require('react')
var Header = require('./Header.jsx')

var LikeButton = React.createClass({
  getInitialState: function(){
      return {
          isLiked: false,
          text: ":|"
      };
  },

  likeThis: function() {
    if (!this.state.isLiked) {
      this.setState({
        isLiked: true,
        text:":)"
      });
    }
  },

  render: function() {
    return <button type="button" id="likeButton" onClick={this.likeThis}>{this.state.text}</button>
  }

});

module.exports = React.createClass({
  'displayName': 'BlankPage.jsx',

  render: function () {
    var title = 'This page is under construction';
    var header = <Header title={title} />;

    return <div className='Page'>
      {header}
      <LikeButton />
    </div>
  }
});
