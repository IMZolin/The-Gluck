import {Navigate} from "react-router-dom";

export default function Register() {
    return (
        <form className="register" >
            <h1>Register</h1>
            <input type="text"
                   placeholder="Username"
                   // value={username}
                   // onChange={ev => setUsername(ev.target.value)}
            />
            <input type="text"
                   placeholder="Email"
                // value={username}
                // onChange={ev => setUsername(ev.target.value)}
            />
            <input type="password"
                   placeholder="Password"
                   // value={password}
                   // onChange={ev => setPassword(ev.target.value)}
            />
            <button>Register</button>
            <div className="error"></div>
            <div>Already registered? </div>
        </form>
    );
}