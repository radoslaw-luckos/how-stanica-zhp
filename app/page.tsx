import SocialButton from './components/UI/Buttons/SocialButton';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import { SocialColor } from './utils/Enums';
import { teams } from './utils/Mocks';
import Image from 'next/image';
import { MuseoSans } from './utils/Fonts';
import TeamsCarousel from './components/UI/TeamsCarousel';

export default function Home() {
	

	return (
		<main className='homePage'>
			<section className='hero'>
				<div className='hero__messageContainer'>
					<h1 className={`${MuseoSans.className} hero__title`}>Czuwaj! Ahoj!</h1>
					<p className='hero__msg'>
						Witamy na stronie HOW Stanica! <br />
						Nasz ośrodek od 50 lat zrzesza harcerskich wodniaków i pozwala im rozwijać swoją
						żeglarską pasję. Sprawdź, co możemy zrobić dla Ciebie!
					</p>
					<div className='hero__socials'>
						<SocialButton color={SocialColor.Facebook}>
							<FaFacebook />
							<p className={MuseoSans.className}>Aktualności na Facebook'u</p>
						</SocialButton>
						<SocialButton color={SocialColor.Youtube}>
							<FaYoutube />
						</SocialButton>
						<SocialButton color={SocialColor.Instagram}>
							<FaInstagram />
						</SocialButton>
					</div>
				</div>
				<div className='hero__imageContainer'>
					<Image
						src='https://images.pexels.com/photos/42111/pexels-photo-42111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
						alt='Hero image'
						quality={100}
						fill
						sizes='100vw'
						style={{
							objectFit: 'cover',
							objectPosition: 'bottom',
						}}
					/>
				</div>
			</section>
			<section className='teams'>
				<h1 className={`${MuseoSans.className} teams__title`}>Drużyny na Stanicy</h1>
				<TeamsCarousel/>
			</section>
		</main>
	);
}
