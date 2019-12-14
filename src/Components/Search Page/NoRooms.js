import React from 'react';
import {MdSentimentDissatisfied as Sad } from 'react-icons/md';
const NoRooms = () => {
	return (
		<div className='no-rooms'>
			<h2>Op's.It turn's out that we don't have what you are looking for</h2>
			<Sad />
		</div>
	);
};

export default NoRooms;
