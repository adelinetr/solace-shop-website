import './Newsletter.scss'

export default function Newsletter() {
    return(
        <>
            <div className="newsletter-section">
                <h4>Subscribe to our newsletter</h4>
                
                <div className="newsletter-box">
                    <input className='input-email' type="email" id="email" placeholder="Enter your e-mail" name="email" required></input>
                    <button className='send-button'>Send</button>
                </div>
            </div>
        </>
    )
}