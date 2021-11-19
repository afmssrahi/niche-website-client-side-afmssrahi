import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch('https://infinite-springs-96185.herokuapp.com/products')
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);
	return (
		<Container>
			<h2
				style={{
					fontSize: '42px',
					letterSpacing: '3px',
					color: '#b71c1c',
					textAlign: 'center',
					marginTop: '70px',
				}}
			>
				Our Services
			</h2>
			<Grid container spacing={3} sx={{ mt: 4 }}>
				{products.map((product) => (
					<Product product={product}></Product>
				))}
			</Grid>
		</Container>
	);
};

export default Products;
