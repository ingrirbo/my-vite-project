import Katalog from "../components/Katalog";
import Navigeringsbanner from "../components/Navigeringsbanner";
import logo from "../images/logo.jpg"

export default function Interior() {
    return (
        <>
            <img src={logo} className="logo"/>
            <Navigeringsbanner />
            <Katalog />
        </>
        )
}