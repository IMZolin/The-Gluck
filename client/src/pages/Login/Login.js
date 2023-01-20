import "./login.css";
import {Navigate} from "react-router-dom";
export default function Login() {
    return (
        <form className="login" >
            <h1>Login</h1>
            <input type="text"
                   placeholder="Email"
                   id="email"
                   // value={username}
                   // onChange={ev => setUsername(ev.target.value)}
            />
            <input type="password"
                   placeholder="Password"
                   id="password"
                   // value={password}
                   // onChange={ev => setPassword(ev.target.value)}
            />
            <button>Login</button>
            <div className="error"></div>
            <a className="navigateLinks" to="/register">New user</a>
            <a id="f-pass" className="navigateLinks">Forgot password</a>

        </form>

    );
}