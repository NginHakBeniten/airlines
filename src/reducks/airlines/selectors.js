import { createSelector } from "reselect";

const userSelector = (state) => state.airlines;
export const getUser = createSelector(
    [userSelector],
    state => state
);