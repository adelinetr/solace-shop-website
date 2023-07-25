import './ExploreOptions.scss'
import ItemsProducts from  './ItemsProducts.js'

export default function ExploreOptions () {
    return(
        <>
        <div className="explore-section">
            <div className="explore-options">
                <div className="text">
                    <h4>Explore our options</h4>
                    <p>Embrace the freedom to express yourself through our meticulously crafted collection, designed to evoke a sense of wanderlust and awaken your inner explorer.</p>
                </div>
            </div>

            <ItemsProducts />

            <div className="numbered-pages">
                <button className='numbered-page active-page'><a href="#">1</a></button>
                <button className='numbered-page'><a href="#">2</a></button>
                <button className='numbered-page'><a href="#">3</a></button>
            </div>

            </div>
        </>
    )
}