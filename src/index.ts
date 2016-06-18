import {PocketSmithInterface} from './interfaces';

import Accounts from './accounts';
import Categories from './categories';
import Me from './me';

import * as Promise from 'bluebird';
import Client from './client';

class PocketSmith implements PocketSmithInterface {
	
	public Client: Client;
	
	public Accounts:Accounts;
	public Categories:Categories;
	public Me: Me = void 0;

	constructor(public token: string) {
		this.token = ((t: string) => {
			return (/^Key|Bearer/i.test(t)) ? t : `Key ${t}`;
		})(this.token);

		this.Client = new Client(this.token);

		this.Accounts = new Accounts(this);
		this.Categories = new Categories(this);
	}

	public init(): Promise<any> {
		var self:PocketSmith = this;
		
		return new Promise((resolve) => {
			if (this.Me === void 0) {
				((new Me(self)).init()).then((Me:Me) => {
					
					self.Me = Me;
					
					resolve(self);
				});
			} else {
				resolve(self);
			}

		});
	}
}

export = PocketSmith;