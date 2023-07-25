import './Categories.scss'
import CategoriesProps from './CategoriesProps'
import OurStory from './images/category01.png'
import Clothes from './images/category02.png'
import Story from './images/category03.png'
import Instagram from './images/category04.png'

export default function Categories() {
    return(
        <>
            <div className="categories-section">
            <h3 className='categories-h3'>Popular Categories</h3>
            <div className="categories-container">
                <CategoriesProps
                image={OurStory}
                categoryName='Our Story'
                />

                <CategoriesProps
                image={Clothes}
                categoryName='Explore Our Clothes'
                />

                <CategoriesProps
                image={Story}
                categoryName='Jewelry'
                />

                <CategoriesProps
                image={Instagram}
                categoryName='Our Instagram'
                />
                </div>
            </div>
        </>
    )
}