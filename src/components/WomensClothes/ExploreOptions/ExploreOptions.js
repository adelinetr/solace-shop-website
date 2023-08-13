import './ExploreOptions.scss'
import React, { useState } from 'react';
import ItemsProducts from  './ItemsProducts.js'
import ItemsCard from './ItemsCard';
import ProductDetailPage from './ProductDetailPage';
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

export default function ExploreOptions () {
    const [activePage, setActivePage] = useState(1);
    const handlePageChange = (page) =>{
        setActivePage(page)
    };
    

    
    const itemsData = [
        
        {
            id: 'gold-plated-necklace',
            mainImage: Item01,
            name: 'Gold Plated Necklace',
            price: '49€',
            status: 'New Collection',
            description: 'Beautiful.'
        } ,
        {
            id: 'white-shirt',
            mainImage: Item02,
            name: 'White Shirt',
            price: '39€',
            status: 'New Collection',
        } ,
        {
            id: 'beige-shirt',
            mainImage: Item03,
            name: 'Beige Shirt',
            price: '55€',
            status: 'New Collection',
        } ,
        {
            id: 'white-heels',
            mainImage: Item04,
            name: 'White Heels',
            price: '75€',
            status: 'New Collection',
        } ,
        {
            id: 'silver-necklace',
            mainImage: Item05,
            name: 'Silver Necklace',
            price: '39€',
            status: 'New Collection',
        } ,
        {
            id: 'white-bag',
            mainImage: Item06,
            name: 'White Bag',
            price: '80€',
            status: 'New Collection',
        } ,
        {
            id: 'beige-coat',
            mainImage: Item07,
            name: 'Beige Coat',
            price: '119€',
            status: 'New Collection',
        } ,
        {
            id: 'white-sneakers',
            mainImage: Item08,
            name: 'White Sneakers',
            price: '79€',
            status: 'New Collection',
        } ,
        {
            id: 'gray-pants',
            mainImage: Item09,
            name: 'Gray Pants',
            price: '65€',
            status: 'New Collection',
        } ,
        {
            id: 'gold-plated-rings',
            mainImage: Item10,
            name: 'Gold Plated Rings',
            price: '77€',
            status: 'New Collection',
        } ,
        {
            id: 'black-bag',
            mainImage: Item11,
            name: 'Black Bag',
            price: '59€',
            status: 'New Collection',
        } ,
        {
            id: '12',
            mainImage: Item12,
            name: 'Gold Plated Necklace',
            price: '79€',
            status: 'New Collection',
        } ,
        {
            id: 'pink-dress',
            mainImage: Item13,
            name: 'Pink Dress',
            price: '60€',
            status: 'New Collection',
        } ,
        {
            id: 'beige-bag',
            mainImage: Item14,
            name: 'Beige Bag',
            price: '55€',
            status: 'New Collection',
        } ,
        {
            id: 'orange-sandals',
            mainImage: Item15,
            name: 'Orange Sandals',
            price: '57€',
            status: 'New Collection',
        } ,
        {
            id: 'white-hat',
            mainImage: Item16,
            name: 'White Hat',
            price: '49€',
            status: 'New Collection',
        } ,
        {
            id: '17',
            mainImage: Item17,
            name: 'White Dress',
            price: '79€',
            status: 'New Collection',
        } ,
        {
            id: '18',
            mainImage: Item18,
            name: 'Yellow Dress',
            price: '85€',
            status: 'New Collection',
        } ,
    ]

    return(
        <>
        <div className="explore-section">
            <div className="explore-options">
                <div className="text">
                    <h4>Explore our options</h4>
                    <p>Embrace the freedom to express yourself through our meticulously crafted collection, designed to evoke a sense of wanderlust and awaken your inner explorer.</p>
                </div>
            </div>

            <ItemsProducts 
            activePage={activePage} 
            itemsData={itemsData}
             />

            <div className="numbered-pages">
                <button className={`numbered-page ${activePage === 1 ? 'active-page' : ''}`} onClick={()=> handlePageChange(1)}><a href="#">1</a></button>
                <button className={`numbered-page ${activePage === 2 ? 'active-page' : ''}`} onClick={()=> handlePageChange(2)}><a href="#">2</a></button>
                <button className={`numbered-page ${activePage === 3 ? 'active-page' : ''}`} onClick={()=> handlePageChange(3)}><a href="#">3</a></button>
            </div>

            </div>
        </>
    )
}