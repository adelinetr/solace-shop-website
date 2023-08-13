import Header from '../Header/Header'
import Main from './Main/Main'
import SecondSection from './SecondSection/SecondSection'
import MostViewed from './MostViewed/MostViewed'
import OurValues from './OurValues/OurValues'
import Categories from './Categories/Categories'
import Reviews from '../Reviews/Reviews'
import Newsletter from '../Newsletter/Newsletter'
import Footer from '../Footer/Footer'


export default function HomePage() {
    return(
        <>
        <Header activePage='/' />
        <Main />
        <SecondSection />
        <MostViewed />
        <OurValues />
        <Categories />
        <Reviews />
        <Newsletter />
        <Footer />
        </>
    )
}