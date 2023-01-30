import "./header.css";
import Popup from 'reactjs-popup';
import {Link} from "react-router-dom";
export default function Header() {
    return (
        <header>
            <Link to="/" className="logo">The Gluck</Link>
            <nav>
                <Popup trigger=
                           {<a> About us </a>}
                       position="bottom center">
                    <div className="cat-box">
                        <Link to="/about-us" className="pop-up-link">About us</Link>
                        <Link to="/contact-us" className="pop-up-link">Contact us</Link>
                    </div>
                </Popup>
                <Popup trigger=
                           {<a> Categories </a>}
                       position="bottom center">
                    <div className="cat-box">
                        <a className="pop-up-link">Literature</a>
                        <a className="pop-up-link">Travel</a>
                        <a className="pop-up-link">Life</a>
                        <a className="pop-up-link">Music</a>
                        <a className="pop-up-link">Cinema</a>
                        <a className="pop-up-link">Style</a>
                        <a className="pop-up-link">Interview</a>
                        <a className="pop-up-link">Podcasts</a>
                    </div>
                </Popup>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>
        </header>
    );
}