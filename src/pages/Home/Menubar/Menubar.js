import AccountCircle from '@mui/icons-material/AccountCircle';
import { Avatar, Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Menubar = () => {
	const { user, logout } = useAuth();

	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const menuId = 'primary-search-account-menu';
	const renderMenu = (
		<Menu
			sx={{ textAlign: 'center', mt: 6 }}
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			id={menuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ bgcolor: 'error.main', color: 'white' }}>
					{user?.displayName}
				</Avatar>
				<>
					<MenuItem
						sx={{
							color: 'error.main',
							fontSize: '20px',
							fontWeight: 'bold',
						}}
					>
						Hello
					</MenuItem>
					<MenuItem sx={{ color: 'error.main', fontWeight: 'bold' }}>
						Name: {user.displayName}
					</MenuItem>
					<MenuItem sx={{ color: 'error.main', fontWeight: 'bold' }}>
						Email: {user.email}
					</MenuItem>
				</>
			</Box>
		</Menu>
	);

	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton
					size='large'
					aria-label='account of current user'
					aria-controls='primary-search-account-menu'
					aria-haspopup='true'
					color='inherit'
				>
					<AccountCircle />
				</IconButton>
				<p>Profile</p>
			</MenuItem>
		</Menu>
	);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position='fixed'
				sx={{ backgroundColor: 'white' }}
				elevation={0}
			>
				<Toolbar sx={{ display: { xs: 'block', sm: 'flex' } }}>
					<Typography
						as={Link}
						to='/home'
						style={{
							textDecoration: 'none',
							color: 'red',
							fontWeight: 'bold',
						}}
						variant='h6'
						noWrap
						component='div'
						sx={{}}
					>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<span style={{ fontSize: '25px' }}>
								MotoChykolon
							</span>
						</Box>
					</Typography>
					<Box sx={{ flexGrow: 1 }} />
					<Box>
						<Link to='/home' style={{ textDecoration: 'none' }}>
							<Button
								sx={{ fontWeight: 'bold', color: '#a91825' }}
							>
								Home
							</Button>
						</Link>
						<Link to='/explore' style={{ textDecoration: 'none' }}>
							<Button
								sx={{ fontWeight: 'bold', color: '#a91825' }}
							>
								Explores
							</Button>
						</Link>
						{user.email && (
							<Link
								to='/dashboard'
								style={{ textDecoration: 'none' }}
							>
								<Button
									sx={{
										fontWeight: 'bold',
										color: '#a91825',
									}}
								>
									Dashboard
								</Button>
							</Link>
						)}
						{!user.email && (
							<Link
								to='/login'
								style={{ textDecoration: 'none' }}
							>
								<Button
									sx={{
										fontWeight: 'bold',
										color: '#a91825',
									}}
								>
									Login
								</Button>
							</Link>
						)}
						<IconButton
							size='large'
							edge='end'
							aria-label='account of current user'
							aria-controls={menuId}
							aria-haspopup='true'
							onClick={handleProfileMenuOpen}
							color='inherit'
						>
							{user.email && (
								<Avatar
									sx={{
										bgcolor: 'error.main',
										color: 'white',
									}}
								>
									{user?.displayName
										?.charAt(0)
										?.toUpperCase()}
								</Avatar>
							)}
						</IconButton>
						{user.email && (
							<Button
								onClick={logout}
								variant='contained'
								color='error'
								size='small'
								sx={{ ml: 2 }}
							>
								Log Out
							</Button>
						)}
					</Box>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
			{renderMenu}
		</Box>
	);
};

export default Menubar;
