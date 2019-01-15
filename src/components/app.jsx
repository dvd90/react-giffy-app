import React, { Component } from 'react';
import giphy from 'giphy-api';


import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: '9rlY0fj2SVYCjSj0WY'
    }

    // this.search("Motorcycle Venom");
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  search = (query) => {
    giphy('cDE21BuxUKRlJWIX2k2C0uyIRhc96NLY').search({
      q: query,
      rating: 'g',
      limit: 15
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  render() {


    return(
     <div>
     <div className="left-scene">
      <SearchBar searchFunction={this.search} />
      <div className="selected-gif">
      <Gif id={this.state.selectedGifId}/>
      </div>
     </div>
     <div className="right-scene">
      <GifList gifs={this.state.gifs} selectGif={this.selectGif}/>
     </div>
     </div>
     );
  };


}

export default App;
