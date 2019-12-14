import React, { useState, useContext } from 'react';
import { filterOutOptions, arrayToObj } from '../Helper/Helpers';
import contextValue from '../../Context API/Rooms Context/RoomsContext';

const SearchInput = () => {
	const context = useContext(contextValue);
	const [isPreium, setPremium] = useState(false);
	const [price, setPrice] = useState(200);
	const [usrNum, setUsrNum] = useState(2);
	const [options, setOptions] = useState(
		context.areRoomsFiltred
			? arrayToObj(context.filter.includes)
			: {
					Wifi: true,
					Breakfast: false,
					Lunch: false,
					TV: false,
					Hot_Tub: false,
					Pets: false
			  }
	);
	const handleSubmit = e => {
		e.preventDefault();
		const state = {
			price: price,
			people: parseInt(usrNum),
			includes: filterOutOptions(options),
			premium: isPreium
		};

		context.filterRooms(state);
	};

	return (
		<div className='search-input'>
			<form onSubmit={handleSubmit}>
				<select
					className='select-premium'
					value={isPreium}
					onChange={e => {
						setPremium(e.target.value === 'true' ? true : false);
					}}>
					<option value={true}>Premium</option>
					<option value={false}>Regular</option>
				</select>
				<div className='room-max-price'>
					<label htmlFor='max-price'>Max Price: </label>

					<input
						id='max-price'
						name='max-price'
						className='room-select-beds'
						type='number'
						min={100}
						step={10}
						onChange={e => {
							setPrice(e.target.value);
						}}
						max={750}
						value={price}
					/>
				</div>
				<div className='room-select-beds'>
					<label htmlFor='beds-select'>Number of Beds:</label>
					<select
						id='beds-select'
						name='beds-select'
						value={usrNum}
						onChange={e => setUsrNum(e.target.value)}>
						<option value={1}>One</option>
						<option value={2}>Two</option>
						<option value={3}>Three</option>
						<option value={4}>Four</option>
						<option value={5}>Five</option>
					</select>
				</div>
				<div className='room-checkboxes'>
					<div className='checkbox-container'>
						<input
							onChange={e => {
								let newOptions = options;
								newOptions[e.target.name] = !options[e.target.name];
								setOptions(newOptions);
							}}
							id='Wifi'
							type='checkbox'
							name='Wifi'
							defaultChecked={options.Wifi}
						/>
						<label htmlFor='Wifi'>Wifi</label>
					</div>

					<div className='checkbox-container'>
						<input
							onClick={e => {
								let newOptions = options;
								newOptions[e.target.name] = !options[e.target.name];
								setOptions(newOptions);
							}}
							id='TV'
							type='checkbox'
							name='TV'
							defaultChecked={options.TV}
						/>
						<label htmlFor='TV'>TV</label>
					</div>

					<div className='checkbox-container'>
						<input
							onChange={e => {
								let newOptions = options;
								newOptions[e.target.name] = !options[e.target.name];
								setOptions(newOptions);
							}}
							id='Lunch'
							type='checkbox'
							name='Lunch'
							defaultChecked={options.Lunch}
						/>

						<label htmlFor='Lunch'> Lunch</label>
					</div>

					<div className='checkbox-container'>
						<input
							onChange={e => {
								let newOptions = options;
								newOptions[e.target.name] = !options[e.target.name];
								setOptions(newOptions);
							}}
							id='Breakfast'
							type='checkbox'
							name='Breakfast'
							defaultChecked={options.Breakfast}
						/>
						<label htmlFor='Breakfast'> Breakfast</label>
					</div>

					<div className='checkbox-container'>
						<input
							onChange={e => {
								let newOptions = options;
								newOptions[e.target.name] = !options[e.target.name];
								setOptions(newOptions);
							}}
							id='Pets'
							type='checkbox'
							name='Pets'
							defaultChecked={options.Pets}
						/>
						<label htmlFor='Pets'> Pets</label>
					</div>
					<div className='checkbox-container'>
						<input
							onChange={e => {
								let newOptions = options;
								newOptions[e.target.name] = !options[e.target.name];
								setOptions(newOptions);
							}}
							id='Hot_Tub'
							type='checkbox'
							name='Hot_Tub'
							defaultChecked={options.Hot_Tub}
						/>
						<label htmlFor='Hot_Tub'>Hot Tub</label>
					</div>
				</div>
				<div className='button-section'>
					<input type='submit' value='Search' className='submit-btn' />
					{context.areRoomsFiltred && (
						<button className='clear-btn' onClick={context.unsetFilter}>
							Clear
						</button>
					)}
				</div>
			</form>
		</div>
	);
};

export default SearchInput;
