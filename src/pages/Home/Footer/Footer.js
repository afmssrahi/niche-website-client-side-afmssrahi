import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
	return (
		<Container>
			<Grid container spacing={2} mt={5} mb={3}>
				<Grid item sm={12} md={6}>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'start',
						}}
					>
						<span
							style={{
								fontSize: '25px',
								color: 'red',
							}}
						>
							MotoChykolon
						</span>
					</Box>
					<p>
						Motorcycling culture is something that riders enjoy no
						matter how different they are in terms of religion,
						gender, language, race, or skin color. Motorcycles are
						fun and it’s a fact.
					</p>
				</Grid>
				<Grid item sm={12} md={2}>
					<div>
						<h4>Quick Links</h4>

						<Link
							style={{
								display: 'block',
								textDecoration: 'none',
								marginBottom: '5px',
								marginTop: '20px',
							}}
							to='/'
						>
							Home
						</Link>
						<Link
							style={{
								display: 'block',
								textDecoration: 'none',
								marginBottom: '5px',
							}}
							to='/'
						>
							Buy Now
						</Link>
						<Link
							style={{
								display: 'block',
								textDecoration: 'none',
								marginBottom: '5px',
							}}
							to='/'
						>
							Reviews{' '}
						</Link>
						<Link
							style={{
								display: 'block',
								textDecoration: 'none',
								marginBottom: '5px',
							}}
							to='/'
						>
							Offer
						</Link>
					</div>
				</Grid>
				<Grid item sm={12} md={2}>
					<div>
						<h4>Know Us</h4>

						<Link
							style={{
								display: 'block',
								textDecoration: 'none',
								marginBottom: '5px',
								marginTop: '20px',
							}}
							to='/'
						>
							Privacy Policy
						</Link>
						<Link
							style={{
								display: 'block',
								textDecoration: 'none',
								marginBottom: '5px',
							}}
							to='/'
						>
							Returns policy
						</Link>
						<Link
							style={{
								display: 'block',
								textDecoration: 'none',
								marginBottom: '5px',
							}}
							to='/'
						>
							promotion
						</Link>
						<Link
							style={{
								display: 'block',
								textDecoration: 'none',
								marginBottom: '5px',
							}}
							to='/'
						>
							Faqs
						</Link>
					</div>
				</Grid>
			</Grid>
			<p
				style={{
					display: 'block',
					textAlign: 'center',
					color: 'red',
				}}
			>
				<strong>MotoChykolon © 2021. All Rights Reserved.</strong>
			</p>
		</Container>
	);
};

export default Footer;
