import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../types/products";

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
        <div>
            <h1>{id}</h1>
        </div>
    );
}
