import { useLocation } from "react-router";
export default function Homepage() {
    const location = useLocation();
    console.log(location);
}