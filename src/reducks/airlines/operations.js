import API from "../../API";
import { fetchAirlinesAction } from "./actions";

const api = new API();

export const fetchAirlines = (params = {}) => {
    return async (dispatch) => {
        return api.getAirlines(params)
            .then(resopnse => dispatch(fetchAirlinesAction(resopnse)))
            .catch(error => alert(error.response.data));
    };
};