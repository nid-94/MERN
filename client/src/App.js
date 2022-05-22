import "./App.css";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Error from "./pages/Error";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Routes, Route, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
function App() {
    return (
        <div className="App">
            <Navigation />
            <h1>MERN workshop</h1>
            <Link to={"/add"}>
                <Button>ADD contact</Button>
            </Link>
            <Link to={"/"}>
                <Button>home</Button>
            </Link>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<Add />} />
                <Route path="/edit/:id" element={<Edit />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
