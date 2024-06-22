import React from 'react'
import classes from "./MainFooter.module.css"

const MainFooter = () => {
  return (
    <div className={`${classes.MainFooterWrapper}`}>
        <div className={`${classes.FooterContent}`}>
            <div className={`${classes.FooterSection}`}>
                <p>Contact Us</p>
                <ul>
                    <li>care@demo.in</li>
                    <li>+91 986-78-89-885</li>
                    <li>Instagram</li>

                </ul>
            </div>
            <div className={`${classes.FooterSection}`}>
            <p>Quick Links</p>
                <ul>
                    <li>FAQs</li>
                    <li>Delivery and Returns</li>
                    <li>Terms and Conditions</li>

                </ul>
            </div>
            <div className={`${classes.FooterSection}`}>
                <p>Sign up for our newsletter</p>
                <input type="text" placeholder='ENTER EMAIL' />
            </div>

        </div>
        <div className={`${classes.Footer}`}><p>&copy; 2024 Scented Candles</p></div>
    </div>
  )
}

export default MainFooter