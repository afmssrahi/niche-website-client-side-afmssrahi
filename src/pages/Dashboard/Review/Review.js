import { Box, Container, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import './Review.css';

const Review = () => {
	const { register, handleSubmit, reset } = useForm();
	const { user } = useAuth();
	const onSubmit = (data) => {
		console.log(data);
		axios
			.post(
				'https://infinite-springs-96185.herokuapp.com/client-reviews',
				data
			)
			.then((res) => {
				if (res.data.insertedId) {
					alert('Reviews successfully');
					reset();
				}
			});
	};

	return (
		<Container>
			<Box>
				<Typography
					variant='h5'
					sx={{ fontWeight: 'bold', textAlign: 'center' }}
					color='red'
				>
					Add Your Reviews
				</Typography>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className='review-form'
					style={{
						width: '70%',
						textAlign: 'center',
						marginLeft: 'auto',
						marginRight: 'auto',
						marginTop: '20px',
					}}
				>
					<input
						placeholder='Your Name'
						value={user?.displayName}
						{...register('name', { required: true, maxLength: 20 })}
						style={{
							width: '80%',
							borderRadius: '3px',
							border: '1px solid gray',
							padding: '7px 10px',
							margin: '8px 0',
						}}
					/>
					<input
						placeholder='Your Email'
						value={user?.email}
						type='email'
						{...register('email', { required: true })}
						style={{
							width: '80%',
							borderRadius: '3px',
							border: '1px solid gray',
							padding: '7px 10px',
							margin: '10px 0',
						}}
					/>

					<input
						placeholder='Your Comment'
						{...register('comment', { required: true })}
						style={{
							width: '80%',
							borderRadius: '3px',
							border: '1px solid gray',
							padding: '7px 10px',
							margin: '10px 0',
						}}
					/>
					<input
						placeholder='Reviews'
						type='number'
						{...register('reviews', { required: true })}
						style={{
							width: '80%',
							borderRadius: '3px',
							border: '1px solid gray',
							padding: '7px 10px',
							margin: '10px 0',
						}}
					/>
					<input
						type='submit'
						value='Review'
						style={{
							width: '80%',
							borderRadius: '3px',
							border: '1px solid gray',
							padding: '9px 10px',
							margin: '10px 0',
							backgroundColor: 'red',
							color: 'white',
							fontWeight: 'bold',
							fontSize: '15px',
						}}
					/>
				</form>
			</Box>
		</Container>
	);
};

export default Review;
