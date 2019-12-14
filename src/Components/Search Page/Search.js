import React, { useContext } from 'react';
import SearchInput from './SearchInput';
import contextValue from '../../Context API/Rooms Context/RoomsContext';
import NavLink from '../Helper/Link';
import Norooms from './NoRooms';
import RoomIcon from '../Helper/RoomIcon';
const Search = () => {
	const context = useContext(contextValue);
	const rooms = context.areRoomsFiltred ? context.filteredRooms : context.rooms;
	const length = rooms.length;

	return (
		<>
			<img
				alt='fuck u'
				src={require('../../Images/generic-search-background.jpg')}
				className='search-page-bg'
			/>
			>
			<NavLink />
			<div className='search-page'>
				<SearchInput />
			</div>
			<div className='search-page-rooms'>
				{length > 0 ? (
					rooms.map((__room, i) => {
						return <RoomIcon key={i} room={__room} />;
					})
				) : (
					<Norooms />
				)}
			</div>
		</>
	);
};

export default Search;
