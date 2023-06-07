import SocialButton from './components/Buttons/SocialButton';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import { SocialColor } from './utils/Enums';
import Image from 'next/image';
import { MuseoSans } from './utils/Fonts';

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
						src='https://images.pexels.com/photos/298846/pexels-photo-298846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
						alt='Hero image'
						width={900}
						height={600}
					/>
				</div>
			</section>
			<section className='teams'></section>
		</main>
	);
}
