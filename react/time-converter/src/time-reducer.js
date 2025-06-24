export const TYPES = Object.freeze({
    DAY: "CAMBIAR_DIA",
    HOUR: "CAMBIAR_HORA",
    MINUTE: "CAMBIAR_MINUTOS",
    SECOND: "CAMBIAR_SEGUNDOS",
    RESET: "RESETEAR",
});

export const initialValues = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
};

export function timeReducer(state, action) {
    const { type, payload } = action;

    switch (type) {
        case TYPES.DAY: {
            return {
                days: payload,
                hours: payload * 24,
                minutes: payload * 60 * 24,
                seconds: payload * 60 * 60 * 24,
            };
        }
        case TYPES.HOUR: {
            return {
                days: payload / 24,
                hours: payload,
                minutes: payload * 60,
                seconds: payload * 60 * 60,
            };
        }
        case TYPES.MINUTE: {
            return {
                days: payload / 60 / 24,
                hours: payload / 60,
                minutes: payload,
                seconds: payload * 60,
            };
        }
        case TYPES.SECOND: {
            return {
                days: payload / 60 / 60 / 24,
                hours: payload / 60 / 60,
                minutes: payload / 60,
                seconds: payload,
            };
        }
        case TYPES.RESET: {
            return initialValues;
        }
        default:
            return state;
    }
}
