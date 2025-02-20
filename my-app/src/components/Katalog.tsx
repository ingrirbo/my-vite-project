import { useState } from "react";
import { Product } from "../types/products";
import Filterbar from "./Filterbar";
import "./Katalog.css";
import Produktkort from "./Produktkort";

interface KatalogProps {
    products: Product[];
}

export default function Katalog({ products }: KatalogProps) {
    const [productsOnDisplay, setProductsOnDisplay] =
        useState<Product[]>(products);

    const handlePriceChange = (
        minPris: number | undefined,
        maksPris: number | undefined
    ) => {
        console.log(products);
        let filteredProducts = products;
        if (minPris !== undefined) {
            filteredProducts = filteredProducts.filter(
                (product) => product.price >= minPris
            );
        }
        if (maksPris !== undefined) {
            filteredProducts = filteredProducts.filter(
                (product) => product.price <= maksPris
            );
        }
        setProductsOnDisplay(filteredProducts);
    };

    return (
        <div className="katalog">
            <Filterbar handlePriceChange={handlePriceChange} />
            <div className="grid-container">
                {productsOnDisplay.map((product) => (
                    <Produktkort
                        id={product.id}
                        bildeUrl={product.image}
                        produktNavn={product.title}
                        beskrivelse={product.description}
                        pris={product.price}
                    />
                ))}
            </div>
        </div>
    );
}
