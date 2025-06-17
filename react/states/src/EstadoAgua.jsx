import { useState } from "react";

// toggle !isOn -> se usa con booleanos.

function EstadoAgua() {
    const STATES = Object.freeze({
        LIQUIDO: "Liquido",
        SOLIDO: "Solido",
        GASEOSO: "Gaseoso",
    });

    // En caso de no usar un set del estado, podes agregarlo como "_"
    const [water, setWater] = useState(STATES.LIQUIDO);

    return (
        <>
            <h1>Agua</h1>
            <p>El estado es: {water}</p>
            <section>
                {Object.values(STATES).map(s => {
                    if (water == s) return;

                    return (
                        <button key={s} onClick={() => setWater(s)}>
                            Cambiar a {s}
                        </button>
                    );
                })}
            </section>
        </>
    );
}

export default EstadoAgua;
