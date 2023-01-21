import './App.css';
import Layout from "./components/Header/Layout";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import Post from "./components/Post/Post";
import CreatePost from "./pages/Post/CreatePost";
import EditPost from "./pages/Post/EditPost";
import Homepage from "./pages/Homepage/Homepage";
import PostPage from "./pages/Post/PostPage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/post/abc" element={<PostPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit" element={<EditPost />} />
        </Route>
      </Routes>
  );
}

export default App;
