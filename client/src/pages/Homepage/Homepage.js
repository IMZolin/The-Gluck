import { useLocation } from "react-router";
import Posts from "../../components/Post/Posts";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./homepage.css"
export default function Homepage() {
    const location = useLocation();
    console.log(location);
    return (
        <>
            <div className="home">
                <Posts />
                <Sidebar />
            </div>
        </>
    );
}