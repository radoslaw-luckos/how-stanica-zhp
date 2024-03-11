
import SocialButton from '@/app/components/UI/Buttons/SocialButton';
import { SocialColorEnum } from '@/app/utils/Enums';
import { MuseoSans } from '@/app/utils/Fonts';
import Image from 'next/image';
import { FaFacebook } from 'react-icons/fa';

export default function Team({params} : { params: { slug: string } }) {
	return (
        <main className='teamPage'>
            <section className="hero">
                <figure className="hero-imageContainer">
                    <Image
                            src='https://images.pexels.com/photos/42111/pexels-photo-42111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            alt='Team promo image'
                            quality={100}
						fill
						sizes='100vw'
						style={{
							objectFit: 'cover',
							objectPosition: 'bottom',
						}}
                        />
                </figure>
                <div className="hero-details">
                    <h1 className={`${MuseoSans.className} hero-details__title heading`}>[Nazwa Drużyny]</h1>
                    <ul className="hero-details__info">
                        <li><p>Rodzaj: [koedukacyjna/męska/żeńska]</p></li>
                        <li><p>Wiek: [grupa metodyczna]</p></li>
                        <li><p>Zbiórki: [termin]</p></li>
                        <li><p>Drużynowy: [imię i nazwisko]</p></li>
                        <li><p>Kontakt: [mail i telefon]</p></li>
                    </ul>
                    <SocialButton color={SocialColorEnum.Facebook}>
                        <FaFacebook />
						<p className={MuseoSans.className}>Profil na Facebook'u</p>
                    </SocialButton>
                </div>
            </section>
            <section className="desc">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet natus, sequi quam quae vel provident porro explicabo culpa illo eum incidunt nesciunt suscipit, nihil, cupiditate consequuntur voluptatem neque necessitatibus earum!
                Mollitia ipsa maiores accusamus totam assumenda. Natus nulla nam, totam deleniti accusantium fugit deserunt ipsum? Libero vero delectus maiores, ea laborum esse deleniti. Minus, atque optio est praesentium voluptas consequatur.
                Aperiam, provident rerum veniam sapiente, quia optio sequi vitae natus voluptas, accusamus voluptatibus assumenda. Voluptas, accusamus ex. Molestias fuga eum magni optio alias tempore quaerat magnam reprehenderit odit ex! Est.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet natus, sequi quam quae vel provident porro explicabo culpa illo eum incidunt nesciunt suscipit, nihil, cupiditate consequuntur voluptatem neque necessitatibus earum!
                Mollitia ipsa maiores accusamus totam assumenda. Natus nulla nam, totam deleniti accusantium fugit deserunt ipsum? Libero vero delectus maiores, ea laborum esse deleniti. Minus, atque optio est praesentium voluptas consequatur.
                Aperiam, provident rerum veniam sapiente, quia optio sequi vitae natus voluptas, accusamus voluptatibus assumenda. Voluptas, accusamus ex. Molestias fuga eum magni optio alias tempore quaerat magnam reprehenderit odit ex! Est.</p>
                </section>
        </main>
    );
}