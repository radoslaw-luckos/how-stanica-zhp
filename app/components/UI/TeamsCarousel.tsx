'use client'
import { useRef, useEffect, useState, RefObject } from 'react';
import { motion as m } from 'framer-motion';
import TeamCard from '../../components/UI/Cards/TeamCard';
import { useTeams } from '@/app/hooks/useTeamsHook';


const TeamsCarousel = () => {
	const {teams} = useTeams();	
    const [carouselWidth, setCarouselWidth] = useState(0);
	const carousel: RefObject<any> = useRef(); 
	/** 
	* TODO: try to find right type for useRef
	*/ 
    useEffect(() => {
		if (carousel){
			setCarouselWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
		}
	}, []);
  	if (teams) return (
    <>
    <m.div
					ref={carousel}
					whileTap={{ cursor: 'grabbing' }}
					className='teams__carousel'
				>
					<m.div
						drag='x'
						dragConstraints={{ right: 0, left: -carouselWidth }}
						className='inner-carousel'
					>
						{teams && teams.map((team) => (
							<TeamCard
								key={team.name}
								teamName={team.name}
								teamSlug={team.slug}
								teamType={team.type}
								age={team.age}
								imageUrl={team.logoURL}
							/>
						))}
					</m.div>
				</m.div>
    </>
    )
	else return (
		<p>Trwa ładowanie drużyn</p>
	)
}
export default TeamsCarousel