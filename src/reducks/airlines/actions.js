export const FETCH_AIRLINES = "FETCH_AIRLINES";
export const fetchAirlinesAction = (airlines) => {
    return {
        type: FETCH_AIRLINES,
        payload: {
            airlines
        },
    };
};