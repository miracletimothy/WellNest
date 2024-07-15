import React, { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import LoadingAnimation from './components/Loaders/LoadingAnimation';
import Profile from './pages/Profile';
import SignIn from './pages/auth/SignIn';
import Dashboard from './pages/Dashboard';
import Appointments from './pages/Appointments';
import ServeAppointment from './pages/ServeAppointment';
import Chat from './pages/Chat';
import EducationalContent from './pages/EducationalContent/EducationalContent';
import CategoryDetails from './pages/EducationalContent/CategoryDetails';
import Records from './pages/Records';
import Settings from './pages/Settings';
import AuthLayout from './AuthLayout';
import MainLayout from './MainLayout';
import CreateAccount from './pages/auth/CreateAccount';
import VerifyEmail from './pages/auth/VerifyEmail';
import { useAuth } from './context/AuthContext';
import './App.css';
import CreateContent from './pages/EducationalContent/CreateContent';

const App: React.FC = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const { token } = useAuth();

	useEffect(() => {
		const storedToken = localStorage.getItem('token');
		if (storedToken) {
			setIsAuthenticated(true);
		} else {
			setIsAuthenticated(false);
		}
		setIsLoading(false);
	}, [token]);

	const logout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('role');
		setIsAuthenticated(false);
	};

	if (isLoading) {
		return (
			<div
				style={{
					width: '100vw',
					height: '100vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<LoadingAnimation />
			</div>
		);
	}

	return (
		<Router>
			<Switch>
				<Route
					path='/signin'
					exact>
					{!isAuthenticated ? (
						<AuthLayout>
							<SignIn />
						</AuthLayout>
					) : (
						<Redirect to='/' />
					)}
				</Route>
				<Route
					path='/create-account'
					exact>
					{!isAuthenticated ? (
						<AuthLayout>
							<CreateAccount />
						</AuthLayout>
					) : (
						<Redirect to='/' />
					)}
				</Route>
				<Route
					path='/verify/:email'
					exact>
					<AuthLayout>
						<VerifyEmail />
					</AuthLayout>
				</Route>

				{isAuthenticated ? (
					<MainLayout logout={logout}>
						<Switch>
							<Route
								path='/'
								exact
								component={Dashboard}
							/>
							<Route
								path='/profile'
								exact
								component={Profile}
							/>
							<Route
								path='/appointments'
								exact
								component={Appointments}
							/>
							<Route
								path='/appointments/:id'
								exact
								component={ServeAppointment}
							/>
							<Route
								path='/chat'
								exact
								component={Chat}
							/>

							<Route
								path='/content'
								exact
								component={EducationalContent}
							/>
							<Route
								path='/content/:category'
								exact>
								<CategoryDetails />
							</Route>
							<Route
								path='/content/:category/create'
								exact>
								<CreateContent />
							</Route>
							<Route
								path='/records'
								exact
								component={Records}
							/>
							<Route
								path='/settings'
								exact
								component={Settings}
							/>
							<Redirect to='/' />
						</Switch>
					</MainLayout>
				) : (
					<Redirect to='/signin' />
				)}
			</Switch>
		</Router>
	);
};

export default App;
