import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ClientSingleReview from '../ClientSingleReview/ClientSingleReview';

const ClientReviews = () => {
	const [clientReviews, setClientReviews] = useState([]);

	useEffect(() => {
		fetch('https://infinite-springs-96185.herokuapp.com/client-reviews')
			.then((res) => res.json())
			.then((data) => setClientReviews(data));
	}, []);

	return (
		<Container sx={{ mb: 5 }}>
			<h2
				style={{
					fontSize: '42px',
					letterSpacing: '3px',
					color: '#b71c1c',
					textAlign: 'center',
					marginTop: '70px',
				}}
			>
				Reviews
			</h2>
			<Grid container spacing={2}>
				{clientReviews.map((clientSingleReview) => (
					<ClientSingleReview
						clientSingleReview={clientSingleReview}
					></ClientSingleReview>
				))}
			</Grid>
		</Container>
	);
};

export default ClientReviews;
