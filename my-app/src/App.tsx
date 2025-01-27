import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Interior from "./pages/Interior";
import Produktside from "./pages/Produktside";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/interior" element={<Interior />} />
                <Route path="/produkt/:id" element={<Produktside />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
