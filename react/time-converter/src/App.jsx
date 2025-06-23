import { useState } from "react";
import "./App.css";
import TimeUnits from "./components/TimeUnits";

const TIMES = Object.freeze({
    HOURS: "hours",
    MINUTES: "minutes",
});

// Agregar switch en lugar de if
function App() {
    const [time, setTime] = useState({
        hours: 0,
        minutes: 0,
    });

    const handleTimeChange = ({ target }) => {
        const { value, name } = target;
        if (name === "hours") {
            setTime({
                hours: value,
                minutes: value * 60,
            });
        }
        if (name === "minutes") {
            setTime({
                hours: value / 60,
                minutes: value,
            });
        }
    };

    return (
        <>
            <h1>Time Converter</h1>
            <TimeUnits
                label="Horas:"
                name={"hours"}
                value={time.hours}
                onChange={handleTimeChange}
            />
            <TimeUnits
                label="Minutos:"
                name={"minutes"}
                value={time.minutes}
                onChange={handleTimeChange}
            />
        </>
    );
}

export default App;

// buscar useReducer.
