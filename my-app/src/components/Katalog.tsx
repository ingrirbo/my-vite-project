import { Product } from "../types/products";
import "./Katalog.css";
import Produktkort from "./Produktkort";

interface KatalogProps {
    products: Product[];
}

export default function Katalog({ products }: KatalogProps) {
    return (
        <div className="katalog">
            <div className="filterbar">
                <p>filtre kommer her</p>
            </div>
            <div className="grid-container">
                {products.map((product) => (
                    <Produktkort
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
