import { useNavigate } from "react-router-dom";
import "./Katalog.css";

interface ProduktkortProps {
    id: number;
    bildeUrl: string;
    produktNavn: string;
    beskrivelse: string;
    pris: number;
}

export default function Produktkort({
    id,
    bildeUrl,
    produktNavn,
    beskrivelse,
    pris,
}: ProduktkortProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/produkt/${id}`);
    };

    return (
        <div className="produktkort" onClick={handleClick}>
            <img src={bildeUrl} alt="Produktbilde" />
            <h3>{produktNavn}</h3>
            <p>{beskrivelse}</p>
            <p>Pris: {pris} kr</p>
            <button>Kjøp</button>
        </div>
    );
}
