import * as Promise from 'bluebird';
import {PocketSmithInterface, AccountInterface} from '../interfaces';

import {NotInMeContext} from '../exceptions';

export default class Accounts {
	constructor(private context: PocketSmithInterface) {

	}

	get(id: number, callback?: Function): Promise<AccountInterface> {
		return this.context.Client.get(`accounts/${id}`, callback);
	}

	getByTitle(title: string, callback?: Function): Promise<AccountInterface> {
		return new Promise((resolve, reject) => {
				this.getAll().then(accs => {
					let acc = accs.find(a => { return a.title == title })
					resolve(acc)
					if (!(callback === void 0)) {
						callback(acc);
					}
				}, err => { reject(err) })
		});
	}

	getAllByUser(userId: number, callback?: Function): Promise<Array<AccountInterface>> {
		return this.context.Client.get(`users/${userId}/accounts`, callback);
	}

	getAllByInstitution(institutionId: number, callback?: Function): Promise<Array<AccountInterface>> {
		return this.context.Client.get(`institutions/${institutionId}/accounts`, callback);
	}

	// -- In `me` context --
	getAll(callback?: Function): Promise<Array<AccountInterface>> {
		if (this.context.Me) {
			return this.getAllByUser(this.context.Me.data.id, callback);
		} else {
			throw NotInMeContext();
		}
	}
}
