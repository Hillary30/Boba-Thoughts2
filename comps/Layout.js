import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}) => { /*children is the <Component> is _app.js */
    return ( 
        <div className="content">
            <Navbar/>
            { children }
            <Footer/>
        </div>
    );
}
 
export default Layout;