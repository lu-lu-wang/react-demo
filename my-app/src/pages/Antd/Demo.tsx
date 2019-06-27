import React, { Component } from 'react';
// import './App.css';
import MediaElement from '../../components/Video/MediaElement';

export default class Demo extends Component {

	// Other code

	render() {
		const
			sources = [
        {src: 'https://test.cdn.sunmi.com/VIDEO/5d0077cecb153.mp4'}
				// {src: 'http://www.streambox.fr/playlists/test_001/stream.m3u8', type: 'application/x-mpegURL'},
				// {src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4', type: 'video/mp4'},
				// {src: 'rtmp://firehose.cul.columbia.edu:1935/vod/mp4:sample.mp4', type: 'video/rtmp'}
			],
			config = {},
			tracks = {}
		;

		return (
		<MediaElement
		   id="player1"
		   mediaType="video"
		   preload="none"
		   controls
		   width="360"
		   height="360"
		   poster="https://test.cdn.sunmi.com/IMG/156015849164825cfe211b9e462.jpg"
		   sources={JSON.stringify(sources)}
		   options={JSON.stringify(config)}
		   tracks={JSON.stringify(tracks)}
		/>);
	}
}