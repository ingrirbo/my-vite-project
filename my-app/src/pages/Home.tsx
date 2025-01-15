import Navigeringsbanner from "../components/Navigeringsbanner"
import logo from "../images/logo.jpg"

export default function Home() {
  return (
    <>
        <img src={logo} className="logo"/>
        <Navigeringsbanner />
    </>
  )
} 