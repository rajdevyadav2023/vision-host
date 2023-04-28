import React from 'react'
import Krishna from '../img/krishna.jpg'
const Footer = () => {
  return (
    <div className='footer'>
    
      <div className="row">
        <div className="col-md-8">
            <div className="row">
                <div className="col-md-3">
                    <p>Products</p>
                    <ul>
                        <li>Shared Hosting</li>
                        <li>VPS Hosting</li>
                        <li>Dedicated Hosting</li>
                        <li>Reseller Hosting</li>
                        <li>WordPress Hosting</li>
                        <li>Managed Hosting</li>
                        <li>WooCommerce Hosting</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <p>Programs</p>
                    <ul>
                        <li>WordPress</li>
                        <li>Affiliates</li>
                        <li>WP Hosting Guide</li>
                        <li>Hosting Features</li>
                        <li>WordPress Live Support</li>
                        <li>WordPress Design</li>
                        <li>Managed SEO</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <p>Support</p>
                    <ul>
                        <li>Chat</li>
                        <li>Knowledge Base</li>
                        <li>Tutorials</li>
                        <li>BluePrint</li>
                        <li>Build & Grow WP Sites</li>
                        <li>VisionHost Creators</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <p>Company</p>

                    <ul>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Contact</li>
                        <li>Terms of Services</li>
                        <li>Privacy & Policy</li>
                        <li>Cooking Setting</li>
                       
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-md-4 text-center">
            <div className="f-img-box">
            <img src={Krishna} alt="Hare Krishna, Hare Rama, Rama-Rama Hare-Hare" className='img-fluid' />
            </div>
            <h4>VisionHost</h4>
            <p>© 2002-2023 VisionHost Inc. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
