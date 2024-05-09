import axios from "axios";

/**
 * Represents a base HTTP API service.
 */
	export default class HttpApiBaseService {
	/**
	 * Creates an instance of HttpApiBaseService.
	 */
	constructor() {
		this.axios = axios.create({
			baseURL: import.meta.env.VITE_API_BASE_URL,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}

	/**
	 * Sends a GET request to the specified URL.
	 * @param {string} url - The URL to send the request to.
	 * @returns {Promise} A promise that resolves with the response data.
	 */
	async get(url) {
		return this.axios.get(url);
	}

	/**
	 * Sends a POST request to the specified URL with the given data.
	 * @param {string} url - The URL to send the request to.
	 * @param {Object} data - The data to send with the request.
	 * @returns {Promise} A promise that resolves with the response data.
	 */
	async post(url, data) {
		return this.axios.post(url, data);
	}

	/**
	 * Sends a PUT request to the specified URL with the given data.
	 * @param {string} url - The URL to send the request to.
	 * @param {Object} data - The data to send with the request.
	 * @returns {Promise} A promise that resolves with the response data.
	 */
	async put(url, data) {
		return this.axios.put(url, data);
	}

	/**
	 * Sends a DELETE request to the specified URL.
	 * @param {string} url - The URL to send the request to.
	 * @returns {Promise} A promise that resolves with the response data.
	 */
	async delete(url) {
		return this.axios.delete(url);
	}
}
