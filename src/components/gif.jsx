import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = "https://media.giphy.com/media/9rlY0fj2SVYCjSj0WY/giphy.gif";
    return(
      <img src={src} alt="" className="gif"/>
      );
  }

}

export default Gif;
