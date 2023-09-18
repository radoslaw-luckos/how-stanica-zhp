// import dynamic from 'next/dynamic';
// import DynamicMap = dynamic(() => import("../components/UI/Map/Map"), {
//     loading: () => <p>loading...</p>,
//     ssr: false
// })
import Image from 'next/image';
import ActionButton from '../components/UI/Buttons/ActionButton';

export default function Contact() {
	return (
		<main className='contactPage'>
			<header className='hero'>
				<h1 className='hero__title'>Kontakt</h1>
				<p className='hero__text'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu purus facilisis,
					imperdiet lorem sed, sodales dolor. Sed sagittis lectus ex, sit amet cursus turpis
					consequat quis. Praesent ligula lectus, lacinia hendrerit consectetur nec, elementum quis
					libero. Maecenas augue ligula, pharetra et metus eu, pretium tristique dui.
				</p>
			</header>
			<section className='contactForm'>
				<form
					action=''
					className='contactForm__form'
				>
					<div className='contactForm__inputBox'>
						<label htmlFor='receiver'>Adresat:</label>
						<select id='receiver'>
							<option value='rafal.rumianowski@zhp.net.pl'>
								Komendant Ośrodka - phm.Rafał Rumianowski
							</option>
						</select>
					</div>
					<div className='contactForm__inputBox'>
						<label htmlFor='sender'>Nadawca:</label>
						<input
							type='text'
							id='sender'
						/>
					</div>
					<div className='contactForm__inputBox'>
						<label htmlFor='subject'>Temat:</label>
						<input
							type='text'
							id='subject'
						/>
					</div>
					<div className='contactForm__inputBox contactForm__inputBox--top'>
						<label htmlFor='message'>Wiadomość: </label>
						<textarea
							id='message'
							rows={5}
							// cols={50}
						/>
					</div>
					<ActionButton>
						<p>Wyślij wiadomość!</p>
					</ActionButton>
				</form>
				<div className='contactForm__imageContainer'>
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
			{/* <section className='map'>
				<DynamicMap />
				<div className='map__details'>
					<p className='map__contactInfo'>
						Adres: <br />
						ul. Kożuchowska 13, 51-013 Wroclaw
					</p>
					<p className='map__contactI'>
						Kontakt do Komendanta Ośrodka <br />
						fsafds@dsdfsdf.pl +48 111 222 333
					</p>
					<p className='map__contactI'>
						Kontakt do Bosmana Ośrodka <br /> fsafds@dsdfsdf.pl +48 111 222 333
					</p>
				</div>
			</section> */}
		</main>
	);
}
