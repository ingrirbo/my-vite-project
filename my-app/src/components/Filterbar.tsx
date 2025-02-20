import { useState } from "react";

export default function Filterbar({
    handlePriceChange,
}: {
    handlePriceChange: (
        minPris: number | undefined,
        maksPris: number | undefined
    ) => void;
}) {
    const [minPris, setMinPris] = useState<number | undefined>(undefined);
    const [maksPris, setMaksPris] = useState<number | undefined>(undefined);

    return (
        <div className="filterbar">
            <p>FILTER</p>
            <label>Pris</label>
            <div className="filterbar__pris_row">
                <input
                    type="number"
                    placeholder="Min"
                    value={minPris}
                    onChange={(e) => setMinPris(Number(e.target.value))}
                />
                <input
                    type="number"
                    placeholder="Maks"
                    value={maksPris}
                    onChange={(e) => setMaksPris(Number(e.target.value))}
                />
                <button onClick={() => handlePriceChange(minPris, maksPris)}>
                    Søk
                </button>
            </div>
        </div>
    );
}
