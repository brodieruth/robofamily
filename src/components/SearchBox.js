import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className='pa2' >
			<input 
			className='tc pa3 ba b--light-gray bg-light-gray'
			type='search' 
			placeholder='find yourself'
			onChange={searchChange}
			/> 
		</div>
	);
} 

export default SearchBox;