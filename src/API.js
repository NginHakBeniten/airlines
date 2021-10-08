import axios from "axios";

const api = axios.create({
	baseURL: "http://kayak.com/",
	headers: {
		"Content-Type": "application/json",
	},
});

export default class API {

    getAirlines = async (params = {}) => {
        return api.get("/h/mobileapis/directory/airlines/homework", {
            params
        }).then(response => {
			console.log(response);
		}).catch(error => {
			alert(error);
		});
    }
}
