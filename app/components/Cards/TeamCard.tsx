import { SexTeamType } from '@/app/utils/Enums';
import Image from 'next/image';
import React from 'react';

export type TeamCardProps = {
	imageUrl: string;
	teamName: string;
	teamType: SexTeamType;
	age: string;
};

const TeamCard = ({ imageUrl, teamName, teamType, age }: TeamCardProps) => {
	return (
		<div className='teamCard'>
			<div className='teamCard__imageContainer'>
				<Image
					src={`${imageUrl}`}
					alt={`${teamName} - logo`}
					width={100}
					height={100}
				/>
			</div>
			<h2 className='teamCard__name'>{teamName}</h2>
			<p className='teamCard__info'>
				{teamType}, {age}
			</p>
		</div>
	);
};

export default TeamCard;
