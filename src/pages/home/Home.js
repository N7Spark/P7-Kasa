import './home.scss'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Gallery from '../../components/gallery/Gallery'
import Footer from '../../components/footer/Footer'

export default function Home() {
	return (
		<div className='home'>
			<Header />
			<Banner />
			<Gallery />
			<Footer />
		</div>
	)
}
