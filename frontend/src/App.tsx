import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Auth from './pages/auth/Auth';
import Dashboard from './pages/Dashboard';
import Appointments from './pages/Appointments';
import Chat from './pages/Chat';
import Content from './pages/Content';
import Records from './pages/Records';
import Settings from './pages/Settings';
import AuthLayout from './AuthLayout';
import MainLayout from './MainLayout';
import './App.css';

const App: React.FC = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(true); // Authentication state

	return (
		<Router>
			<Switch>
				{!isAuthenticated ? (
					<Route>
						<AuthLayout>
							<Switch>
								<Route
									path='/auth'
									exact
									component={Auth}
								/>
								<Redirect to='/auth' />
							</Switch>
						</AuthLayout>
					</Route>
				) : (
					<Route>
						<MainLayout>
							<Switch>
								<Route
									path='/'
									exact
									component={Dashboard}
								/>
								<Route
									path='/appointments'
									exact
									component={Appointments}
								/>
								<Route
									path='/chat'
									exact
									component={Chat}
								/>
								<Route
									path='/content'
									exact
									component={Content}
								/>
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
					</Route>
				)}
			</Switch>
		</Router>
	);
};

export default App;
