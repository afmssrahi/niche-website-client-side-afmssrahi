import DeleteIcon from '@mui/icons-material/Delete';
import { Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

const MyOrders = () => {
	const [orders, setOrders] = useState([]);
	const { user } = useAuth();
	useEffect(() => {
		fetch(
			`https://infinite-springs-96185.herokuapp.com/orders?email=${user.email}`
		)
			.then((res) => res.json())
			.then((data) => setOrders(data));
	}, []);

	const handleDelete = (id) => {
		const proceedConfirm = window.confirm(
			'Are You Sure to delete this Tours ? '
		);
		if (proceedConfirm) {
			const url = `https://infinite-springs-96185.herokuapp.com/order/${id}`;
			fetch(url, {
				method: 'DELETE',
			})
				.then((res) => res.json())
				.then((result) => {
					if (result.deletedCount === 1) {
						alert('Booking deleted successfully');
						const remaining = orders.filter(
							(order) => order._id !== id
						);
						setOrders(remaining);
					}
				});
		}
	};

	return (
		<Container>
			{orders.length === 0 ? (
				<h2 style={{ textAlign: 'center', marginTop: '20px' }}>
					Your Order Feild is Empty..Please Order..!
				</h2>
			) : (
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 700 }} aria-label='customized table'>
						<TableHead>
							<TableRow>
								<StyledTableCell align='center'>
									Image
								</StyledTableCell>
								<StyledTableCell align='center'>
									Name
								</StyledTableCell>
								<StyledTableCell align='center'>
									Description
								</StyledTableCell>
								<StyledTableCell align='center'>
									Price
								</StyledTableCell>
								<StyledTableCell align='center'>
									Action
								</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{orders.map((order) => (
								<StyledTableRow key={order._id}>
									<StyledTableCell component='th' scope='row'>
										<img
											src={order.purchageProduct.img}
											width='50px'
											alt=''
										/>
									</StyledTableCell>
									<StyledTableCell align='left'>
										{order.purchageProduct.name}
									</StyledTableCell>
									<StyledTableCell align='left'>
										{order.purchageProduct.description.slice(
											0,
											140
										)}
									</StyledTableCell>
									<StyledTableCell align='left'>
										<h2 style={{ fontWeight: 'bold' }}>
											${order.purchageProduct.price}
										</h2>
									</StyledTableCell>
									<StyledTableCell align='left'>
										<DeleteIcon
											sx={{
												fontSize: '30px',
												color: '#c62828',
											}}
											onClick={() => {
												handleDelete(order._id);
											}}
										></DeleteIcon>
									</StyledTableCell>
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			)}
		</Container>
	);
};

export default MyOrders;
