import './styles/globals.scss';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Harcerski Ośrodek Wodny Stanica',
	description:
		'Oficjalna strona internetowa Harcerskiego Ośrodka Wodnego Stanica, należącego do Chorągwi Dolnośląskiej Związku Harcerstwa Polskiego',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='pl'>
			<body className={inter.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
