import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Interior from "./pages/Interior";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/interior" element={<Interior />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
