import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer__company-name">
                <h3>Boulevard Learning Academy</h3>
                <h3>大道學苑</h3>
            </div>
            {/*
              <div className='footer__links'>
                <h4>Useful Links</h4>
                </div>
            */}
          

            <div className = 'footer__contact-us'>
                <h4>Get In Touch</h4>
                <div> 地址 / Adress: 1400 Jericho Tpke, New Hyde Park, NY 11040</div>
                <div>電話 / Phone: (516)304-8968, (516)593-1671</div>
                <div>聯繫人 / Contact: Mr. Lihong Cheng </div>
                <div>Email: &nbsp;<a href="mailto:blvdacademy@gmail.com">BlvdAcademy@gmail.com</a></div>
                <div>Tax ID: 85-2741716</div>
            </div>
        </div>
    )
}

export default Footer
