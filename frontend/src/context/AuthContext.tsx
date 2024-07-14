import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
	token: string | null;
	user: any | null;
	login: (token: string, user: any) => void;
	logout: () => void;
}

interface AuthProviderProps {
	children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [token, setToken] = useState<string | null>(
		localStorage.getItem('token'),
	);
	const [user, setUser] = useState<any | null>(null);

	const login = (token: string, user: any) => {
		localStorage.setItem('token', token);
		setToken(token);
		setUser(user);
	};

	const logout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('role');
		setToken(null);
		setUser(null);
	};

	return (
		<AuthContext.Provider value={{ token, user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};
