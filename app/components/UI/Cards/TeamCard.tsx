import { TeamSexEnum } from '@/app/utils/Enums';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export type TeamCardProps = {
	imageUrl: string;
	teamName: string;
	teamSlug: string;
	teamType: TeamSexEnum;
	age: string;
};

const TeamCard = ({ imageUrl, teamName,teamSlug, teamType, age }: TeamCardProps) => {
	return (
		<Link href={`/o-nas/druzyny/${teamSlug}`} className='teamCard'>
			<div className='teamCard__hero'>
				<div className='teamCard__imageContainer'>
					<Image
						src={`${imageUrl}`}
						alt={`${teamName} - logo`}
						width={100}
						height={100}
					/>
				</div>
				<h2 className='teamCard__name'>{teamName}</h2>
			</div>
			
			<p className='teamCard__info'>
				{teamType}, {age}
			</p>
		</Link>
	);
};

export default TeamCard;
