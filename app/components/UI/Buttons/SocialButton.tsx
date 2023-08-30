import { SocialColor } from '@/app/utils/Enums';
import React, { ReactNode } from 'react';

type Props = {
	color: SocialColor;
	children: ReactNode;
};

const SocialButton = ({ color, children }: Props) => {
	return <button className={`socialBtn socialBtn--${color}`}>{children}</button>;
};

export default SocialButton;
