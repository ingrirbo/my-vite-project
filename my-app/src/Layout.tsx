import { ReactNode } from "react";
import Navigeringsbanner from "./components/Navigeringsbanner";
import logo from "./images/logo.jpg";
import handlekurv from "./assets/handlekurv.svg";
import "./Layout.css";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <header>
                <button className="handlekurv">
                    <img src={handlekurv} />
                </button>
                <img src={logo} className="logo" />
                <Navigeringsbanner />
            </header>
            <main>{children}</main>
            <footer>{/* Footer content */}</footer>
        </>
    );
}
