import ItemsCard from './ItemsCard'
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
import Item12 from './images/dress12.png'

export default function ItemsProduct () {
    return(
        <>
        <div className="our-options">
            <ItemsCard
            image={Item01}
            itemName='Gold Plated Necklace'
            price='49€'
             />

<ItemsCard
            image={Item02}
            itemName='White Shirt'
            price='49€'
             />

<ItemsCard
            image={Item03}
            itemName='Beige Shirt'
            price='49€'
             />
             <ItemsCard
            image={Item04}
            itemName='White Heels'
            price='49€'
             />
             <ItemsCard
            image={Item05}
            itemName='Silver Necklace'
            price='49€'
             />
             <ItemsCard
            image={Item06}
            itemName='White Bag'
            price='49€'
             />
             <ItemsCard
            image={Item07}
            itemName='Beige Coat'
            price='49€'
             />
             <ItemsCard
            image={Item08}
            itemName='White Shoes'
            price='49€'
             />
             <ItemsCard
            image={Item09}
            itemName='Beige Wide Pants'
            price='49€'
             />
             <ItemsCard
            image={Item10}
            itemName='Set of Rings'
            price='60€'
             />
             <ItemsCard
            image={Item11}
            itemName='Black Handbag'
            price='49€'
             />
             <ItemsCard
            image={Item12}
            itemName='Long Dress'
            price='49€'
            className='ninth-item'
             />
            </div>
        </>
    )
}