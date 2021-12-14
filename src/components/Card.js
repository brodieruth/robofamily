import React from 'react';

const Card = ({ name, email, id }) => {
	return (
		<div className='tc bg-light-yellow dib br3 pa4 ma2 grow bw3 shadow-5' >
			<img alt='robot' src={`https://robohash.org/${name}`} width='200px' height='200px' />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;