import { FiFacebook, FiTwitter } from 'react-icons/fi'
import { SiInstagram } from 'react-icons/si'

function Footer() {
    return (
        <>
            <div className="footerStyle mt-10">
                <div className="">
                    <div className="container pb-3">
                        <footer className="footer p-10 bg-base-200 text-base-content">
                            <div>
                                <span className="footer-title">Account</span>
                                <a className="link link-hover">Sign In</a>
                                <a className="link link-hover">Register</a>
                                <a className="link link-hover">Order Status</a>
                            </div>
                            <div>
                                <span className="footer-title">About Us</span>
                                <a className="link link-hover">Our Story</a>
                                <a className="link link-hover">Careers</a>
                            </div>
                            <div>
                                <span className="footer-title">Help</span>
                                <a className="link link-hover">Contact Us</a>
                                <a className="link link-hover">Order Status</a>
                                <a className="link link-hover">Returns</a>
                            </div>
                            <div>
                                <span className="footer-title">Follow Us!</span>
                                <a style={{width:'300px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </a>
                                <div className='flex space-x-3 py-3'>
                                    <a href="#instagram" className='text-xl'><SiInstagram /></a>
                                    <a href="#fb" className='text-xl ml-2'><FiFacebook /></a>
                                    <a href="#twitter" className='text-xl ml-2'><FiTwitter /></a>
                                </div>
                            </div>
                        </footer>
                        <footer className="md-footer-display footer  px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                            <div className="items-center grid-flow-col">
                                <p className='text-lg'>V E N I A</p>
                            </div>
                            <div className='text-sm flex justify-center'>© Company Name Address Ave, City Name, State ZIP</div>
                            <div className="md-screen-footer">
                                <div className="grid grid-flow-col gap-4">
                                    <a href="#" className='underline underline-offset-1'>Terms of Use</a> 
                                    <a href="#" className='underline underline-offset-1'>Privacy Policy</a>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer