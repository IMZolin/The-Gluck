import "./contactus.css";
import {Link} from "react-router-dom";
export default function Login() {
    return (
        <form className="contact-us" >
            <h1>Contact us</h1>
            <textarea
                   placeholder="Text"
                   id="text"
                   wrap="off"
                   cols="100" rows="20"

            />
            <button>Send message</button>

        </form>

    );
}