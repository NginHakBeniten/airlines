import fetchJsonp from "fetch-jsonp";

export default class API {

    getAirlines = async (params = {}) => {

		return fetchJsonp('https://kayak.com/h/mobileapis/directory/airlines/homework', {
			jsonpCallback: 'jsonp',
		})
		.then(response => response.json())
		.then(json => json)
		.catch(err => {
			console.log(err);
		})
    }
}
