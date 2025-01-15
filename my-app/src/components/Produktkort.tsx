import './Katalog.css';

interface ProduktkortProps {
    bildeUrl: string;
    produktNavn: string;
    beskrivelse: string;
    pris: number;
}

export default function Produktkort({ bildeUrl, produktNavn, beskrivelse, pris }: ProduktkortProps) {
    return (
        <div className="produktkort">
            <img src={bildeUrl} alt="Produktbilde"/>
            <h3>{produktNavn}</h3>
            <p>{beskrivelse}</p>
            <p>Pris: {pris} kr</p>
            <button>Kjøp</button>
        </div>
    )
}