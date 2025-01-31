import "../pages/Produktside.css";
import { useState } from "react";

// TODO: kan lage feilmelding med info når man prøver å overskrive maks antall
// TODO: håndtere legg i handlekurv knappen
export default function ProduktsideKnapperad() {
    const [count, setCount] = useState(1);
    return (
        <div className="knapperad">
            <div className="teller">
                <button onClick={() => setCount(count > 1 ? count - 1 : 1)}>
                    -
                </button>
                <span>{count}</span>
                <button
                    onClick={() => setCount(count < 10 ? count + 1 : count)}
                >
                    +
                </button>
            </div>
            <button className="leggIHandlekurvKnapp">Legg i handlekurv</button>
        </div>
    );
}
