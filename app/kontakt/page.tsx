'use client';
import dynamic from 'next/dynamic';
const Map = dynamic(() => import('../components/UI/Map/Map'), {
	ssr: false,
});
import Image from 'next/image';
import ActionButton from '../components/UI/Buttons/ActionButton';

export default function Contact() {
	return (
		<main className='contactPage'>
			<header className='hero'>
				<h1 className='hero__title heading'>Napisz do nas!</h1>
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
							placeholder='Tu wpisz wiadomość do nas!'
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
			<section className='map'>
				<h2 className='map__title heading'>Lub skontaktuj się z nami inaczej!</h2>
				<div className='map__content'>
					<Map />
					<div className='map__details'>
						<p className='map__contactInfo'>
							<span className='map__contactInfo--strong'>Adres:</span> <br />
							ul. Kożuchowska 13, 51-013 Wrocław
						</p>
						<p className='map__contactInfo'>
							<span className='map__contactInfo--strong'>Kontakt do Komendanta Ośrodka</span> <br />
							fsafds@dsdfsdf.pl <br />
							+48 111 222 333
						</p>
						<p className='map__contactInfo'>
							<span className='map__contactInfo--strong'>Kontakt do Bosmana Ośrodka</span>
							<br />
							fsafds@dsdfsdf.pl <br />
							+48 111 222 333
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
