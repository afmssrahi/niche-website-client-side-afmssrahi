import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../../images/banner/slide-3-2.jpg';

const banner = {
	background: `url(${bg})`,
	height: '100vh',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	padding: '0px 20px',
};

const Banner = () => {
	return (
		<Box
			style={banner}
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div>
				<h2
					style={{
						fontSize: '42px',
						letterSpacing: '3px',
						color: '#b71c1c',
					}}
				>
					The MotorBike is Men Wish
				</h2>
				<p
					style={{
						fontSize: '20px',
						opacity: '1',
						color: '#eeeeee',
						marginTop: '20px',
					}}
				>
					Motorcycling culture is something that riders enjoy <br />{' '}
					no matter how different they are in terms of religion,
					gender, language, race, or skin color. Motorcycles are fun
					and it’s a fact.
				</p>
				<Link to='/explore'>
					<button
						style={{
							backgroundColor: '#b71c1c',
							color: 'white',
							border: 'none',
							padding: '10px 20px',
							borderRadius: '5px',
							marginTop: '20px',
						}}
					>
						Buy Now
					</button>
				</Link>
			</div>
		</Box>
	);
};

export default Banner;
