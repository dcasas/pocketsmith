import * as Promise from 'bluebird';
import {PocketSmithInterface, TransQueryInterface, TransactionInterface} from '../interfaces';

export default class Transactions {
	constructor(private context: PocketSmithInterface) {

	}

	getAll(query: TransQueryInterface, userId?: number, callback?: Function): Promise<any> {
		let page: number = 1;
		query.page = page;

		let url: string = `users/${userId || this.context.Me.data.id}/transactions`;

		let req: Promise<any> = this.context.Client.get(url, void 0, query);

		let nextCb = (cb: Function) => {
			page += 1;
			query.page = page;

			let resp = this.context.Client.get(url, void 0, query);

			resp.then(r => {
				cb({ data: r, next: nextCb });
			});

			return resp;
		};

		return new Promise((resolve, reject) => {
			req.then(data => {
				resolve({ data: data, next: nextCb });
			}).catch(e => {
				reject(e);
			});
		});
	}

	createInTransactionAccount(tx: TransactionInterface, accId: number): Promise<any> {
		let url: string = `transaction_accounts/${accId}/transactions`;
		return this.context.Client.post(url, void 0, tx);
	}

	createInTransactionAccountByTitle(tx: TransactionInterface, title: string): Promise<any> {
		return new Promise((resolve, reject) => {
			this.context.Accounts.getByTitle(title).then(acc => {
				resolve(this.createInTransactionAccount(tx, acc.primary_transaction_account.id));
			}, err => { reject(err) });
		});
	}

	listInTransactionAccount(query: TransQueryInterface, accId: number): Promise<any> {
		query.page = query.page? query.page : 1;

		let url: string = `transaction_accounts/${accId}/transactions`;
		let req: Promise<any> = this.context.Client.get(url, void 0, query);

		let nextCb = (cb: Function) => {
			query.page += 1;
			return this.context.Client.get(url, void 0, query).then(r => {
				cb({ transactions: r, next: nextCb });
			});
		};

		return new Promise((resolve, reject) => {
			req.then(data => {
				resolve({ transactions: data, next: nextCb });
			}).catch(e => {
				reject(e);
			});
		});
	}

	listInTransactionAccountByTitle(query: TransQueryInterface, title: string): Promise<any> {
		return new Promise((resolve, reject) => {
			this.context.Accounts.getByTitle(title).then(acc => {
				resolve(this.listInTransactionAccount(query, acc.primary_transaction_account.id));
			}, err => { reject(err) });
		});
	}

}
