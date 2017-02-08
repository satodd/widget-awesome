var React = require('react')
var Header = require('./Header.jsx')

var LikeButton = React.createClass({
  getInitialState: function(){
    return {
        isLiked: false,
        likeCount: 0
    };
  },

  likeThis: function() {
    if (!this.state.isLiked) {
      this.setState({
        isLiked: true,
        likeCount: this.state.likeCount += 1
      });
      return "heart .liked"
    } else {
      return "heart .unliked"
    }
  },

  getLikeClass: function() {
    if (this.state.isLiked) {
      return 'heart liked';
    } else {
      return 'heart unliked';
    }
  },

  render: function() {
    return (
      <div className="buttonContainer">
        <div className="buttonHolder">
          <button type="button" className="likeButton" onClick={this.likeThis}>
            <div className={this.getLikeClass()}></div>
          </button>
        </div>
        <div className="countHolder">
          <div className="likeCount"> {this.state.likeCount} likes </div>
        </div>
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
