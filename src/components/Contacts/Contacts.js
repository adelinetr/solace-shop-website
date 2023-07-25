import MainImage from './images/image.png'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Newsletter from '../Newsletter/Newsletter'
import './Contacts.scss'

export default function Contacts() {
    return(
        <>
            <Header />
            <div className="contacts-page">
                <div className="main-img">
                    <img className='contacts-img' src={MainImage} alt="" />
                </div>
                <div className="text-contacts">
                    <h3>Our Contacts</h3>
                    <p>We would love to hear from you and connect with our Solace community. Whether you have a question, feedback, or simply want to share your thoughts, we're here to listen and assist you. <br />Please reach out to us using the contact information below:
<br /><br />
                Customer Support: <br />
                Phone: +37044957557 <br />
                Email: solace@info.com <br />
<br /><br />
                Social Media: Connect with us on our social media platforms to stay updated on the latest trends, behind-the-scenes glimpses, and exclusive offers: <br /><br />
                <a href="#">Facebook</a> <br />
                <a href="#">Instagram</a>
</p>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </>
    )
}