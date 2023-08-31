'use client';
import Image from 'next/image';
import stanicaLogo from '../../assets/icons/stanica-white.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MuseoSans } from '@/app/utils/Fonts';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
	const activePath: string = usePathname();
	const [isMenuOpened, setMenuOpened] = useState<boolean>(false);
	return (
		<header className={`${MuseoSans.className} navbar`}>
			<Link className='logo' href={'/'}>
				<Image
					alt='HOW Stanica logo'
					src={stanicaLogo}
				/>
			</Link>
			<nav>
				<button
					className='hamburgerBtn'
					onClick={() => setMenuOpened(!isMenuOpened)}
				>
					<RxHamburgerMenu />
				</button>
				<ul className={`mobile-menu${isMenuOpened ? ' mobile-menu--active' : ''}`}>
					<li
						className={activePath == '/' ? 'mobile-menu__link mobile-menu__link--active' : 'mobile-menu__link'}
						onClick={() => setMenuOpened(!isMenuOpened)}
					>
						<Link href='/'>Główna</Link>
					</li>
					<li
						className={activePath.includes('/o-nas') ? 'mobile-menu__link mobile-menu__link--active' : 'mobile-menu__link'}
						onClick={() => setMenuOpened(!isMenuOpened)}
					>
						<Link href='/o-nas'>O nas</Link>
					</li>
					<li
						className={activePath == '/oferta' ? 'mobile-menu__link mobile-menu__link--active' : 'mobile-menu__link'}
						onClick={() => setMenuOpened(!isMenuOpened)}
					>
						<Link href='/oferta'>Oferta</Link>
					</li>
					<li
						className={activePath == '/kontakt' ? 'mobile-menu__link mobile-menu__link--active' : 'mobile-menu__link'}
						onClick={() => setMenuOpened(!isMenuOpened)}
					>
						<Link href='/kontakt'>Kontakt</Link>
					</li>
					<div className='mobile-menu__mobile-socials'>
						<Link href={''}><FaFacebook/></Link>
						<Link href={''}><FaInstagram/></Link>
						<Link href={''}><FaYoutube/></Link>
					</div>
				</ul>
				
				<ul className={'menu'}>
					<li
						className={activePath == '/' ? 'menu__link menu__link--active' : 'menu__link'}
					>
						<Link href='/'>Główna</Link>
					</li>
					<li
						className={activePath.includes('/o-nas') ? 'menu__link menu__link--active' : 'menu__link'}
					>
						<Link href='/o-nas'>O nas</Link>
					</li>
					<li
						className={activePath == '/oferta' ? 'menu__link menu__link--active' : 'menu__link'}
					>
						<Link href='/oferta'>Oferta</Link>
					</li>
					<li
						className={activePath == '/kontakt' ? 'menu__link menu__link--active' : 'menu__link'}
					>
						<Link href='/kontakt'>Kontakt</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
