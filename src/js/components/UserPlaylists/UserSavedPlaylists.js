import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';

class UserSavedPlaylists extends Component {
	
	onClickAddNewPlaylist(newPlaylist, targetPlaylist, event){
		event.preventDefault();
		let newPlaylistArray = targetPlaylist.tracks.concat(newPlaylist);
		let newPlaylistObject = targetPlaylist;
		newPlaylistObject.tracks = newPlaylistArray;
		console.log(newPlaylistObject);
		
		this.props.dispatch(actions.updatePlaylist(newPlaylistObject, this.props.currentUser.accessToken))
	}
	generateResult(resultArr) {
	  let arr = [];
	  if(!resultArr) {
	    arr = <div></div>
	  } else {
	      arr = resultArr.map((playlist, index) => {
	      return (
	        <li key={index}>
	          <div><button onClick={this.onClickAddNewPlaylist.bind(this, this.props.newPlaylist, playlist)}>{playlist.name}</button></div>
	        </li>
	      );
	      })
	  }
	  return arr;
	}

	render() {
		return (
			<div className="UserPlaylist">
			<h1>My Saved Playlists</h1>
			<div className="UserPlaylist-container">
		     	{this.generateResult(this.props.userPlaylists)}
			</div>
			</div>
		);
	}
}

export default connect()(UserSavedPlaylists) ;