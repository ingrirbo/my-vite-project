import './Katalog.css';
import Produktkort from './Produktkort';
import vase from "../images/produkter/vase.jpg"

export default function Katalog() {
    return (
        <div className="katalog">
            <div className="filterbar">
                <p>filtre kommer her</p>
            </div>
            <div className="grid-container">
                <Produktkort bildeUrl={vase} produktNavn="Produktnavn" beskrivelse="Beskrivelse av produkt" pris={899} />
                <Produktkort bildeUrl={vase} produktNavn="Produktnavn" beskrivelse="Beskrivelse av produkt" pris={899} />
                <Produktkort bildeUrl={vase} produktNavn="Produktnavn" beskrivelse="Beskrivelse av produkt" pris={899} />
                <Produktkort bildeUrl={vase} produktNavn="Produktnavn" beskrivelse="Beskrivelse av produkt" pris={899} />
                <Produktkort bildeUrl={vase} produktNavn="Produktnavn" beskrivelse="Beskrivelse av produkt" pris={899} />
                <Produktkort bildeUrl={vase} produktNavn="Produktnavn" beskrivelse="Beskrivelse av produkt" pris={899} />
            </div>
        </div>
    )
}