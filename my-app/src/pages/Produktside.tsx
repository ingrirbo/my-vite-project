import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProduktsideKnapperad from "../components/ProduktsideKnapperad";
import Layout from "../Layout";
import { Product } from "../types/products";
import "./Produktside.css";

export default function Produktside() {
    const { id } = useParams();

    const [product, setProduct] = useState<Product | undefined>(undefined);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((json) => setProduct(json));
    }, [id]);

    if (!product) {
        return <p>Spinner her...</p>; // TODO
    }

    return (
        <Layout>
            <div className="produktside">
                <img src={product.image} alt="Produktbilde" />
                <div className="produktinfo">
                    <p>Kategori: {product.category}</p>
                    <h1>{product.title.toUpperCase()}</h1>
                    <p>Pris: {product.price}</p>
                    <ProduktsideKnapperad produktId={product.id} />
                    <h2>DETALJER</h2>
                    <p>{product.description}</p>
                </div>
            </div>
        </Layout>
    );
}
