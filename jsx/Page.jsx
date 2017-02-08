var React = require('react')
var Header = require('./Header.jsx')

var LikeButton = React.createClass({
  getInitialState: function(){
    return {
        isLiked: false,
        text: "\u2661",
        likeCount: 0
    };
  },

  likeThis: function() {
    if (!this.state.isLiked) {
      this.setState({
        isLiked: true,
        text:"\u2665",
        likeCount: this.state.likeCount += 1
      });
    }
  },

  render: function() {
    return (
      <div>
        <button type="button" className="likeButton" onClick={this.likeThis}>
          <span className="heart">{this.state.text}</span>
        </button>
        <div className="likeCount"> Likes: {this.state.likeCount} </div>
      </div>
    )
  }
});

module.exports = React.createClass({
  'displayName': 'BlankPage.jsx',
  render: function () {
    return (
      <div className='Page'>
        <LikeButton />
      </div>
    )
  }
});
