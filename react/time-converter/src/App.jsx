import { useReducer } from "react";
import "./App.css";
import TimeUnits from "./components/TimeUnits";
import { TYPES, initialValues, timeReducer } from "./time-reducer";

// El useReduce se usa mayormente cuando en un handle tengo multiples setStates.
function App() {
    const [time, timeDispatch] = useReducer(timeReducer, initialValues);

    const handleChange = ({ target }) => {
        const { name, value } = target;
        timeDispatch({ type: name, payload: value });
    };

    const handleClick = () => {
        timeDispatch({ type: TYPES.RESET });
    };

    // conversion a días y botón para volver a cero.

    return (
        <>
            <h1>Time Converter</h1>
            <TimeUnits
                label="Dias"
                name={TYPES.DAY}
                value={time.days}
                onChange={handleChange}
            />

            <TimeUnits
                label="Horas"
                name={TYPES.HOUR}
                value={time.hours}
                onChange={handleChange}
            />
            <TimeUnits
                label="Minutos"
                name={TYPES.MINUTE}
                value={time.minutes}
                onChange={handleChange}
            />

            <TimeUnits
                label="Segundos"
                name={TYPES.SECOND}
                value={time.seconds}
                onChange={handleChange}
            />

            <button onClick={handleClick} style={{ marginTop: "10px" }}>
                Resetear
            </button>
        </>
    );
}

export default App;
