'use client';
import Image from 'next/image';
import stanicaLogo from '../../assets/icons/stanica-white.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MuseoSans } from '@/app/utils/Fonts';


const Navbar = () => {
	const activePath: string = usePathname();

	return (
		<header className={`${MuseoSans.className} navbar`}>
			<div className='logo'>
				<Image
					alt='HOW Stanica logo'
					src={stanicaLogo}
				/>
			</div>
			<nav>
				<ul className='menu'>
					<li className={activePath == '/' ? 'menu__link menu__link--active' : 'menu__link'}>
						<Link href='/'>Główna</Link>
					</li>
					<li className={activePath == '/o-nas' ? 'menu__link menu__link--active' : 'menu__link'}>
						<Link href='/o-nas'>O nas</Link>
					</li>
					<li className={activePath == '/oferta' ? 'menu__link menu__link--active' : 'menu__link'}>
						<Link href='/oferta'>Oferta</Link>
					</li>
					<li className={activePath == '/kontakt' ? 'menu__link menu__link--active' : 'menu__link'}>
						<Link href='/kontakt'>Kontakt</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
