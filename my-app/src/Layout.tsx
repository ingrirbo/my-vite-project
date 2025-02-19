import { ReactNode } from "react";
import { Link } from "react-router-dom";
import handlekurv from "./assets/handlekurv.svg";
import Navigeringsbanner from "./components/Navigeringsbanner";
import logo from "./images/logo.jpg";
import "./Layout.css";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <header>
                <div className="logo-og-handlekurv">
                    <img src={logo} className="logo" />
                    <Link to="/handlekurv">
                        <button className="handlekurv">
                            <img src={handlekurv} />
                        </button>
                    </Link>
                </div>
                <Navigeringsbanner />
            </header>
            <main>{children}</main>
            <footer>{/* Footer content */}</footer>
        </>
    );
}
