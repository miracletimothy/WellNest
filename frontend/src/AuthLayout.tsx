import React from 'react';

const AuthLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
	return <div className='AuthLayout'>{children}</div>;
};

export default AuthLayout;
