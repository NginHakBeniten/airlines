import { createSelector } from "reselect";

const userSelector = (state) => state.airlines;
export const getAirlines = createSelector(
    [userSelector],
    state => state
);