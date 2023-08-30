'use client'
import { useRef, useEffect, useState, RefObject } from 'react';
import { motion as m } from 'framer-motion';
import TeamCard from '../../components/UI/Cards/TeamCard';
import { teams } from '@/app/utils/Mocks';


const TeamsCarousel = () => {
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
  return (
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
						{teams.map((team) => (
							<TeamCard
								key={team.teamName}
								teamName={team.teamName}
								teamSlug={team.teamSlug}
								teamType={team.teamType}
								age={team.age}
								imageUrl={team.imageUrl}
							/>
						))}
					</m.div>
				</m.div>
    </>
    
  )
}
export default TeamsCarousel