import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="navbar__container">
                <Link href="/" id="navbar__logo"><Image src="/mug.svg" width={50} height={35} className="mug" alt="mug"/>Boba Thoughts</Link>
                <div className="navbar__toggle" id="mobile-menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className="navbar__menu">
                    <li className="navbar__item">
                        <Link href="/" className="navbar__links">Home</Link>
                    </li>
                    <li className="navbar__item">
                        <Link href="/addRating" className="navbar__links">My Ratings</Link>
                    </li>
                    <li className="navbar__item">
                        <Link href="/bookmark" className="navbar__links">Bookmarks</Link>
                    </li>
                    <li className="navbar__btn">
                        <Link href="/signUp" className="button">Sign Up</Link>
                    </li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;