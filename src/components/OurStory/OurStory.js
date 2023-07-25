import './OurStory.scss'
import Photo01 from './images/story-image.png'
import OurClothing from './OurClothing'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Newsletter from '../Newsletter/Newsletter'

export default function OurStory() {

    return(
        <>
        <Header activePage='./our-story' />
        <div className="our-story">
            <div className="our-story-section">
                <div className="left-column">
                    <img className='img-story' src={Photo01} alt="" />
                </div>

                <div className="right-column">
                    <h3 className='story-h3'>Our Story</h3>
                    <p className='p-story'>Driven by a vision to create a brand that celebrates the inherent connection between humans and nature, Solace embarked on a mission to curate a collection that would evoke a sense of peace and freedom. Each garment was meticulously designed with careful attention to detail, aiming to capture the essence of natural landscapes and the ethereal spirit of nomads.</p>
                </div>
            </div>

            <OurClothing />
            <Newsletter />
            <Footer />
        </div>

        </>
    )
}