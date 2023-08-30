
export default function Team({params} : { params: { slug: string } }) {
	return <main>O nas: {params.slug}</main>;
}