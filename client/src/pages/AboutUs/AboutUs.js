import {formatISO9075} from "date-fns";
import {Link} from 'react-router-dom';
import "./aboutus.css"
export default function PostPage() {
    return (
        <div className="post-page">
            <h1>About us</h1>
            <div className="edit-row">
                <Link className="edit-btn" to={`/contact-us`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                    Contact us
                </Link>
            </div>
            {/*<div className="image">*/}
            {/*    <img src={`https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`} alt=""/>*/}
            {/*</div>*/}
            <div className="content" >
                <p className="p-about-us">
                    We are a team of enterprising writers, journalists, and creators who want to help others like us open up and give experience.
                </p>
            </div>
        </div>
    );
}
