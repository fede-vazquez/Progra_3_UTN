import { useState } from "react";

function App() {
    const [name, setName] = useState("");

    const handleNameChange = e => {
        setName(e.target.value);
    };

    return (
        <>
            <h1>Inputs controlados</h1>
            <div>
                <label htmlFor="nombre">Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    value={name}
                    onChange={handleNameChange}
                />
            </div>
            <p>Tu nombre es: {name}</p>

            {name.length >= 30 && <p>Te pasaste</p>}
        </>
    );
}

export default App;
