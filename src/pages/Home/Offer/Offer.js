import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import offerImg from '../../../images/offer/offer.jpg';
import './Offer.css';

const offer = {
	background: `url(${offerImg})`,
	height: '70vh',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
};
const Offer = () => {
	return (
		<Box
			style={offer}
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				mt: 4,
			}}
		>
			<div style={{ textAlign: 'center', color: 'white', px: 2 }}>
				<h2 style={{ fontSize: '30px' }}>
					10% Off <br />
					For Eid Offer
				</h2>

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

export default Offer;
