import Accounts from './accounts';
import Categories from './categories';
import Users from './users';
import Transactions from './transactions';
import Me from './me';

import Client from './client';

export interface PocketSmithInterface {
	Client: Client;

	Accounts: Accounts;
	Categories: Categories;
	Users: Users;
	Transactions: Transactions;
	Me: Me;
}

export interface MeInterface {
	id: number;
	login: string;
	name: string;
	email: string;
	avatar_url: string;
	beta_user: boolean;
	time_zone: string;
	week_start_day: number;
	base_currency_code: string;
	always_show_base_currency: boolean;
	using_multiple_currencies: boolean;
	created_at: string;
	updated_at: string;
}

export interface CategoryInterface {

}

export interface AccountInterface {
	id: number;
	title: string;
	currency_code: string;
	current_balance: number;
	current_balance_date: string;
	type: string;
	is_net_worth: Boolean;
	transactions: Promise<Iterable<TransactionInterface>>;
	primary_transaction_account: TransactionAccountInterface;
}

export interface TransactionAccountInterface {
	id: number;
  name: string;
  number?: string;
  currency_code: string;
  current_balance: string;
  current_balance_date: string;
	starting_balance: string;
  starting_balance_date: string;
	created_at: string;
  updated_at: string;
}

export interface UserInterface {
	id: number;
	login: string;
	name: string;
	email: string;
	avatar_url: string;
	beta_user: boolean;
	time_zone: string;
	week_start_day: number;
	base_currency_code: string;
	always_show_base_currency: boolean;
	using_multiple_currencies: boolean;
	created_at: string;
	updated_at: string;
}

export interface TransQueryInterface {
	page?: number;
	start_date?: string;
	end_date?: string;
	only_uncategorised?: number;
	type?: string;
}

export interface TransactionInterface {
	payee: string;
	amount: string;
	date: string;
	is_transfer?: boolean;
	labels?: Array<string>;
	category_id?: string;
	note?: string;
	memo?: string;
	cheque_number?: string;
}
