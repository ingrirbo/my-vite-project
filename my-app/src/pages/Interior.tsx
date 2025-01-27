import { useEffect, useState } from "react";
import Katalog from "../components/Katalog";
import Navigeringsbanner from "../components/Navigeringsbanner";
import logo from "../images/logo.jpg";
import { Product } from "../types/products";

export default function Interior() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/jewelery")
            .then((res) => res.json())
            .then((json) => setProducts(json));
    }, []);

    return (
        <>
            <img src={logo} className="logo" />
            <Navigeringsbanner />
            <Katalog products={products} />
        </>
    );
}
