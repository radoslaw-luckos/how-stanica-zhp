import React, { ReactNode } from 'react';

type BtnPropsType = {
	children?: ReactNode;
	actionHandler?: any;
};

const ActionButton = ({ children }: BtnPropsType) => {
	return <button className='actionBtn'>{children}</button>;
};

export default ActionButton;
