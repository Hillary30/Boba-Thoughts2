import Link from 'next/link'

const Footer = () => {
    return ( 
        <div className="footer__container">
            <div className="footer__links">
                <div className="footer__link--wrapper">
                    <div className="footer__link--items">
                        <h2>About Us</h2>
                        <Link href="/" className="footerLink">How it works</Link>
                        <Link href="/" className="footerLink">My Account</Link>
                        <Link href="/" className="footerLink">Contacts</Link>
                        <Link href="/" className="footerLink">Terms of Services</Link>
                    </div>
                </div>
            </div>
            <div className="social__media">
                <div className="social__media--wrap">
                    <div className="footer__logo">
                        <Link href="" id="footer__logo"><i className="fa-solid fa-mug-saucer"></i>Boba Thoughts</Link>
                    </div>
                    <footer className="website__rights">Boba Thoughts 2022. All Rights Reserved.</footer>
                    <div className="social__icons">
                        <Link href="/" className="social__icon--link" target="_blank">
                            <i className="fab fa-facebook"></i>
                        </Link>
                        <Link href="/" className="social__icon--link" target="_blank">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link href="/" className="social__icon--link" target="_blank">
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;