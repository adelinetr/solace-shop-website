import ReviewProps from './ReviewProp'
import './Reviews.scss'
import {useState} from 'react'
import Anne from './images/Anne.png'
import Nelly from './images/Nelly.png'
import Carolina from './images/Carolina.png'
import Kate from './images/Kate.png'
import Olivia from './images/Olivia.png'
import Lucie from './images/Lucie.png'

export default function Reviews() {
    const reviewsData = [
        {
            image: Anne,
            name: 'Anne',
            review: 'The collection at Solace is a carefully curated masterpiece, boasting an array of timeless pieces that blend contemporary style with classic allure.'
        },

        {
            image: Nelly,
            name: 'Nelly',
            review: 'Solace\'\s collection is a testament to elegance and sophistication. Each piece reflects a unique blend of artistic expression and timeless beauty.'
        },

        {
            image: Carolina,
            name: 'Carolina',
            review: 'I am absolutely amazed by Solace\'s collection. The attention to detail and craftsmanship are unparalleled, making every piece a work of art.'
        },

        {
            image: Kate,
            name: 'Kate',
            review: 'Solace has redefined luxury for me'
        },

        {
            image: Lucie,
            name: 'Lucie',
            review: 'Timeless clothes. So grateful to find this brand!'
        },

        {
            image: Olivia,
            name: 'Olivia',
            review: 'The collection at Solace is a breath of fresh air.'
        }
    ];

    const [activeReviewIndex, setActiveReviewIndex] = useState(0)
    const handleReviewChange = (reviewIndex) => {
        setActiveReviewIndex(reviewIndex)
     };

     const reviewCount = Math.ceil(reviewsData.length / 2)
     const limitedPageIndex = Math.min(activeReviewIndex, reviewCount - 1 )


     
     const startIndex = limitedPageIndex * 2;
     const endIndex = startIndex + 1


    return(
        <>
            <div className="reviews-section">
                <h3 className="reviews-h3">Reviews</h3>

                <div className="review-card">
                    <ReviewProps
                    image={reviewsData[startIndex].image}
                    name={reviewsData[startIndex].name}
                    review={reviewsData[startIndex].review}
                     />
                     {endIndex < reviewsData.length && (

                        <ReviewProps
                    image={reviewsData[endIndex].image}
                    name={reviewsData[endIndex].name}
                    review={reviewsData[endIndex].review}
                     />

                     )}

                


                </div>
                <div className="next-dots">
                {Array.from({ length: reviewCount }).map((_, index) => (
                    <span
                    key={index}
                    className={`dot ${activeReviewIndex === index ? 'active-dot' : ''}`}
                    onClick={() => handleReviewChange(index)}
                    >   
                    </span>
                ))}
                </div>
            </div>
        </>
    )
}