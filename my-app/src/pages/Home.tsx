import { useState, useEffect } from "react";
import Katalog from "../components/Katalog";
import Layout from "../Layout";
import { Product } from "../types/products";

export default function Home() {
    const [products, setProducts] = useState<Product[] | undefined>(undefined);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => setProducts(json));
    }, []);

    if (!products) {
        return <p>Spinner her...</p>; // TODO
    }

    return (
        <Layout>
            <Katalog products={products} />
        </Layout>
    );
}
