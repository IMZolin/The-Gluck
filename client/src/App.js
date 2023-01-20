import './App.css';
import Layout from "./components/Header/Layout";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import Post from "./components/Post/Post";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
  );
}

export default App;
