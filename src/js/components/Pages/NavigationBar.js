import React, { Component } from 'react';
import {Link, hashHistory} from 'react-router';
import {connect} from 'react-redux';
import playMusicFunc from '../MusicPlayer/playMusicFunc';
import RenderTracks from '../PlaylistPlayer/RenderTracks';

class NavigationBar extends Component {
 
  render() {
    return (
      <div>
        <div className="NavigationBar">
          <ul className="NavUL">
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/dashboard/search">Search</Link></li>
            <li><Link to="/dashboard/top">Explore Top Playlists</Link></li>
            <li>Contact Us</li>
            <li>Logout</li>
          </ul>
        </div>
        {this.props.children}
        <div>
          <div> {playMusicFunc(this.props.currentListeningUrl)}</div>
         <RenderTracks playlistObject={this.props.currentListeningPlaylist} />
        </div>
      </div>
    );
  }
}

// export default NavigationBar;

export default connect(
    ({ currentListeningUrl, currentListeningPlaylist }) => ({ currentListeningUrl, currentListeningPlaylist })
)(NavigationBar);