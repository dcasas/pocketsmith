import * as Got from 'got';
import * as Promise from 'bluebird';

class Client {
	constructor(private token: string) { }

	private resource(method: string, url: string, payload?: any): Promise<any> {
		console.log(`method ${method}, url: ${url}, payload: ${payload}`)
		return new Promise((resolve, reject) => {
			Got(`https://api.pocketsmith.com/v2/${url}`, {
				method: method,
				json: true,
				retries: 0,
				query: payload || void 0,
				headers: {
					'Authorization': this.token,
					'Content-Type': 'application/json'
				}
			})
				.then(response => {
					resolve(response.body);
				}, err => {
					console.log(err)
					reject(err);
				});
		});
	}

	get(url: string, callback?: Function, payload?: any): Promise<any> {
		let prom = this.resource('GET', url, payload);

		if (!(callback === void 0)) {
			prom.then((resp) => {
				callback(resp);
			});
		}

		return prom;
	}

	post(url: string, callback?: Function, payload?: any): Promise<any> {
		let prom = this.resource('POST', url, payload);

		if (!(callback === void 0)) {
			prom.then((resp) => {
				callback(resp);
			});
		}

		return prom;
	}

	put(url: string, callback?: Function, payload?: any): Promise<any> {
		let prom = this.resource('PUT', url, payload);

		if (!(callback === void 0)) {
			prom.then((resp) => {
				callback(resp);
			});
		}

		return prom;
	}
}

export default Client;
