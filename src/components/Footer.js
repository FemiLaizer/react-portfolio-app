import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer_title">Oplaize</p>

            <div className="footer_social">
                <a href="#" className="footer_icon">
                    <i className='bx bxl-facebook'></i>
                </a>
                <a href="#" className="footer_icon">
                    <i className='bx bxl-instagram'></i>
                </a>
                <a href="#" className="footer_icon">
                    <i className='bx bxl-twitter'></i>
                </a>
                <a href="#" className="footer_icon">
                    <i className='bx bxl-whatsapp'></i>
                </a>
            </div>
            {/* <p>&#169; 2023 copyright all right reserved</p> */}
            <p>&copy; 2023 copyright all right reserved</p>
        </footer>

    )
}

export default Footer