import Home from "./containers/Home/Home.tsx";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.tsx";
import { Container } from "@mui/material";
import EditPost from "./containers/EditPost/EditPost.tsx";
import NewPost from "./containers/NewPost/NewPost.tsx";
import ReadPost from "./containers/ReadPost/ReadPost.tsx";
import About from "./components/About/About.tsx";
import Contacts from "./components/Contacts/Contacts.tsx";
import "./App.css";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Container>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/posts/:idPost/read" element={<ReadPost />} />
            <Route path="/posts/:idPost/edit" element={<EditPost />} />
          </Route>
          <Route path="/posts" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/add/new-post" element={<NewPost />} />
          <Route path="/posts/:idPost" element={<ReadPost />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
