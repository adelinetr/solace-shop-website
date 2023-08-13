import './MostViewed.scss'
import ProductProps from './ProductProps'
import Item01 from './images/item01.png'
import Item02 from './images/item02.png'
import Item03 from './images/item03.png'

export default function MostViewed() {
    return(
        <>
            <div className="most-viewed-section">
                <h3 className='h3-items'>The Most Viewed</h3>
                <div className="product">
                    <ProductProps
                        image={Item01}
                        itemName='Silver Earrings'
                        price='45€'
                        className='main-item'
                        nextButton='main-next'
                    />
                    <ProductProps
                        image={Item02}
                        itemName='Black bag'
                        price='59€'
                        className='secondary-item'
                        nextButton='main-next'
                    />
                    <ProductProps
                        image={Item03}
                        itemName='Gold-plated Earrings'
                        price='65€'
                        className='secondary-item'
                        nextButton='last-next'
                    />
                </div>

            </div>
        </>
    )
}