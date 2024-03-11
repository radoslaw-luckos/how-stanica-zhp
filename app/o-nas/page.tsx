import Image from 'next/image';
import Link from 'next/link';
import ActionButton from '../components/UI/Buttons/ActionButton';

export default function About() {
	return (
		<main className='aboutPage'>
			<header className='hero'>
				<h1 className='hero__title heading'>O nas</h1>
				<p className='hero__text'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu purus facilisis,
					imperdiet lorem sed, sodales dolor. Sed sagittis lectus ex, sit amet cursus turpis
					consequat quis. Praesent ligula lectus, lacinia hendrerit consectetur nec, elementum quis
					libero. Maecenas augue ligula, pharetra et metus eu, pretium tristique dui.
				</p>
			</header>
			<section className='yesterday'>
				<div className='yesterday__imageContainer yesterday__imageContainer--left'>
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
				<div className='yesterday__textContainer'>
					<h2 className='yesterday__title heading'>Wczoraj...</h2>
					<p className='yesterday__text'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu purus facilisis,
						imperdiet lorem sed, sodales dolor. Sed sagittis lectus ex, sit amet cursus turpis
						consequat quis. Praesent ligula lectus, lacinia hendrerit consectetur nec, elementum
						quis libero. Maecenas augue ligula, pharetra et metus eu, pretium tristique dui. Donec
						blandit lectus orci, lobortis cursus ex faucibus ut. Etiam tellus est, varius eget
						libero sit amet, interdum imperdiet massa. Ut porta, tortor nec porta auctor, nibh
						tellus rhoncus nulla, ut faucibus lectus diam a nulla.
					</p>
				</div>
			</section>
			<section className='today'>
				<div className='today__imageContainer today__imageContainer--right'>
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
				<div className='today__textContainer'>
					<h2 className='today__title heading'>a dziś...</h2>
					<p className='today__text'>
						Nunc eu purus facilisis, imperdiet lorem sed, sodales dolor. Sed sagittis lectus ex, sit
						amet cursus turpis consequat quis. Praesent ligula lectus, lacinia hendrerit consectetur
						nec, elementum quis libero. Maecenas augue ligula, pharetra et metus eu, pretium
						tristique dui.
					</p>
					<ActionButton>
						<Link href={'/oferta'}>Sprawdź naszą ofertę</Link>
					</ActionButton>
				</div>
			</section>
		</main>
	);
}
