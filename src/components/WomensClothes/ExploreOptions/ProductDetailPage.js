import Item01 from './images/necklace01.png'
import Item02 from './images/shirt02.png'
import Item03 from './images/shirt03.png'
import Item04 from './images/heels04.png'
import Item05 from './images/necklace05.png'
import Item06 from './images/bag06.png'
import Item07 from './images/coat07.png'
import Item08 from './images/shoes08.png'
import Item09 from './images/pants09.png'
import Item10 from './images/rings10.png'
import Item11 from './images/bag11.png'
import Item12 from './images/necklace12.png'
import Item13 from './images/dress13.png'
import Item14 from './images/bag14.png'
import Item15 from './images/sandals15.png'
import Item16 from './images/hat16.png'
import Item17 from './images/dress17.png'
import Item18 from './images/dress18.png'
import { useParams } from 'react-router-dom';

export default function ProductDetailPage(props) {
    const {mainImage, name, price, status, description} = props

    const { itemId } = useParams();
    const selectedItem = props.itemsData.find((item)=> item.id === Number(itemId))

    if (!selectedItem) {
        return <div>Item Not Found</div>
    }

    return(
        <div className="product-page">

            <div className="main-image-container">
                <img src={mainImage} alt="Item" />
            </div>

            <div className="description-text">
                <h3 className="item-name">{name}</h3>
                <p className="status-item">{status}</p>
                <span className="item-price">{price}</span>

                <div className="the-description">
                    <p>{description}</p>
                </div>
                <div className="items-page-icons">
                    <div className="delivery-icon">
                        <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.875 19.5H19.5V21.9375H4.875V19.5ZM2.4375 13.4062H14.625V15.8438H2.4375V13.4062Z" fill="#787878"/>
                            <path d="M36.4637 20.2386L32.8075 11.7073C32.7137 11.488 32.5575 11.3011 32.3584 11.1698C32.1593 11.0385 31.926 10.9686 31.6875 10.9688H28.0312V8.53125C28.0312 8.20802 27.9028 7.89802 27.6742 7.66946C27.4457 7.4409 27.1357 7.3125 26.8125 7.3125H7.31245V9.75H25.5937V25.0526C25.0384 25.3751 24.5523 25.8043 24.1637 26.3156C23.775 26.8268 23.4914 27.4099 23.3293 28.0312H15.6706C15.374 26.8824 14.6685 25.8811 13.6865 25.2152C12.7045 24.5493 11.5133 24.2643 10.3362 24.4139C9.15908 24.5634 8.07693 25.137 7.29256 26.0273C6.50818 26.9176 6.07544 28.0635 6.07544 29.25C6.07544 30.4365 6.50818 31.5824 7.29256 32.4727C8.07693 33.363 9.15908 33.9366 10.3362 34.0861C11.5133 34.2357 12.7045 33.9507 13.6865 33.2848C14.6685 32.6189 15.374 31.6176 15.6706 30.4688H23.3293C23.5944 31.5147 24.2007 32.4424 25.0523 33.1051C25.9039 33.7678 26.9521 34.1276 28.0312 34.1276C29.1103 34.1276 30.1585 33.7678 31.0101 33.1051C31.8617 32.4424 32.468 31.5147 32.7331 30.4688H35.3437C35.6669 30.4688 35.9769 30.3403 36.2055 30.1118C36.434 29.8832 36.5625 29.5732 36.5625 29.25V20.7188C36.5625 20.5536 36.5289 20.3903 36.4637 20.2386ZM10.9687 31.6875C10.4866 31.6875 10.0153 31.5445 9.6145 31.2767C9.21365 31.0089 8.90123 30.6282 8.71674 30.1828C8.53225 29.7374 8.48398 29.2473 8.57804 28.7745C8.67209 28.3016 8.90424 27.8673 9.24513 27.5264C9.58602 27.1855 10.0203 26.9534 10.4932 26.8593C10.966 26.7653 11.4561 26.8136 11.9015 26.998C12.3469 27.1825 12.7276 27.495 12.9954 27.8958C13.2632 28.2966 13.4062 28.7679 13.4062 29.25C13.4056 29.8963 13.1485 30.5159 12.6916 30.9729C12.2346 31.4298 11.615 31.6869 10.9687 31.6875ZM28.0312 13.4062H30.8831L33.4961 19.5H28.0312V13.4062ZM28.0312 31.6875C27.5491 31.6875 27.0778 31.5445 26.677 31.2767C26.2762 31.0089 25.9637 30.6282 25.7792 30.1828C25.5948 29.7374 25.5465 29.2473 25.6405 28.7745C25.7346 28.3016 25.9667 27.8673 26.3076 27.5264C26.6485 27.1855 27.0828 26.9534 27.5557 26.8593C28.0285 26.7653 28.5186 26.8136 28.964 26.998C29.4094 27.1825 29.7901 27.495 30.0579 27.8958C30.3257 28.2966 30.4687 28.7679 30.4687 29.25C30.4681 29.8963 30.211 30.5159 29.7541 30.9729C29.2971 31.4298 28.6775 31.6869 28.0312 31.6875ZM34.125 28.0312H32.7331C32.4647 26.9873 31.8574 26.062 31.0065 25.4003C30.1555 24.7386 29.1091 24.378 28.0312 24.375V21.9375H34.125V28.0312Z" fill="#787878"/>
                        </svg>
                        <p>Worldwide Delivery</p>
                    </div>
                    <div className="quality-icon">
                        <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M37.375 19.4995L33.41 14.982L33.9625 9.00195L28.0963 7.66945L25.025 2.50195L19.5 4.87445L13.975 2.50195L10.9038 7.66945L5.0375 8.9857L5.59 14.9657L1.625 19.4995L5.59 24.017L5.0375 30.0132L10.9038 31.3457L13.975 36.5132L19.5 34.1245L25.025 36.4969L28.0963 31.3295L33.9625 29.997L33.41 24.017L37.375 19.4995ZM16.25 27.6245L9.75 21.1245L12.0413 18.8332L16.25 23.0257L26.9587 12.317L29.25 14.6245L16.25 27.6245Z" fill="#787878"/>
                        </svg>
                        <p>High Quality</p>
                    </div>
                </div>

                <div className="buttons-for-items">
                    <button className="add-to-cart">Add to cart</button>
                    <button className="add-to-fav">Add to Favourites</button>
                </div>
            </div>
        </div>
    )
}