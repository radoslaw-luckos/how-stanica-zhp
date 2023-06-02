import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logoHufiec from '../../assets/icons/hufiec.svg';
import logoZHP from '../../assets/icons/zhp.svg';

type Props = {};

const Footer = (props: Props) => {
	return (
		<footer className='footerBox'>
			<div className='address'>
				<h2 className='address__name'>Harcerski Ośrodek Wodny "Stanica"</h2>
				<p>ul. Kożuchowska 13, 51-631 Wrocław</p>
				<p>stanica@zhp.pl / www.stanica.zhp.pl</p>
			</div>
			<div className='logos'>
				<Link
					href='https://zhp.pl/'
					target='_blank'
					className='logos__link'
				>
					<Image
						src={logoZHP}
						alt='Logo Związku Harcerstwa Polskiego'
					/>
				</Link>
				<Link
					href='http://wroclawwschod.zhp.pl/'
					target='_blank'
					className='logos__link'
				>
					<Image
						src={logoHufiec}
						alt='Logo Hufca ZHP Wrocław Wschód'
					/>
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
