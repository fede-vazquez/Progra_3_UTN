import { useState } from "react";
import Lampara from "./components/Lampara";

function App() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <>
            <h1>Lamparas</h1>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                {new Array(10).fill(null).map((_, i) => {
                    return (
                        <Lampara
                            key={i}
                            isOn={i === selectedIndex}
                            onClick={() => {
                                setSelectedIndex(i);
                            }}
                        />
                    );
                })}
            </div>
        </>
    );
}
export default App;
