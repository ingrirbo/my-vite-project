import "../pages/Produktside.css";
import { useState } from "react";

// TODO: kan lage feilmelding med info når man prøver å overskrive maks antall
// TODO: respons når produktet er lagt til i handlekurven, feks "1" ved symbolet og en liten popup
export default function ProduktsideKnapperad({
    produktId,
}: {
    produktId: number;
}) {
    const [antall, setAntall] = useState(1);

    const leggIHandlekurv = () => {
        const today = new Date().toISOString().split("T")[0];
        fetch("https://fakestoreapi.com/carts", {
            method: "POST",
            body: JSON.stringify({
                userId: 5, // TODO
                date: today,
                products: [{ productId: produktId, quantity: antall }],
            }),
        })
            .then((res) => res.json())
            .then((json) => console.log(json));
    };

    return (
        <div className="knapperad">
            <div className="teller">
                <button onClick={() => setAntall(antall > 1 ? antall - 1 : 1)}>
                    -
                </button>
                <span>{antall}</span>
                <button
                    onClick={() => setAntall(antall < 10 ? antall + 1 : antall)}
                >
                    +
                </button>
            </div>
            <button className="leggIHandlekurvKnapp" onClick={leggIHandlekurv}>
                Legg i handlekurv
            </button>
        </div>
    );
}
