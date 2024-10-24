import Home from "./containers/Home/Home.tsx";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.tsx";
import {Container} from "@mui/material";
import BlogForm from "./components/BlogForm/BlogForm.tsx";

const App = () => {


    return (
        <>
            <header>
                <Navbar/>
            </header>
            <Container>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path='/add/new-blog' element={<BlogForm/>}/>
                </Routes>
            </Container>
        </>
    );
};

export default App
