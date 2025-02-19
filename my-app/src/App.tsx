import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Interior from "./pages/Interior";
import Produktside from "./pages/Produktside";
import Handlekurv from "./pages/Handlekurv";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/interior" element={<Interior />} />
                <Route path="/produkt/:id" element={<Produktside />} />
                <Route path="/handlekurv" element={<Handlekurv />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
