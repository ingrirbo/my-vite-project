import { useEffect, useState } from "react";
import Katalog from "../components/Katalog";
import Layout from "../Layout";
import { Product } from "../types/products";

export default function Interior() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/jewelery")
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
