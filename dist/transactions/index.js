"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("bluebird");
var Transactions = (function () {
    function Transactions(context) {
        this.context = context;
    }
    // Transactions.prototype.getAll = function (query, userId, callback) {
    //     var _this = this;
    //     var page = 1;
    //     query.page = page;
    //     var url = "users/" + (userId || this.context.Me.data.id) + "/transactions";
    //     var req = this.context.Client.get(url, void 0, query);
    //     var nextCb = function (cb) {
    //         page += 1;
    //         query.page = page;
    //         var resp = _this.context.Client.get(url, void 0, query);
    //         resp.then(function (r) {
    //             cb({ data: r, next: nextCb });
    //         });
    //         return resp;
    //     };
    //     return new Promise(function (resolve, reject) {
    //         req.then(function (data) {
    //             resolve({ data: data, next: nextCb });
    //         }).catch(function (e) {
    //             reject(e);
    //         });
    //     });
    // };
    //

    Transactions.prototype.createInTransactionAccount = function (tx, accId) {
        var url = "transaction_accounts/" + accId + "/transactions";
        return this.context.Client.post(url, void 0, tx);
    };
    Transactions.prototype.createInTransactionAccountByTitle = function (tx, title) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.context.Accounts.getByTitle(title).then(function (acc) {
                resolve(_this.createInTransactionAccount(tx, acc.primary_transaction_account.id));
            }, function (err) { reject(err); });
        });
    };
    Transactions.prototype.listInTransactionAccount = function (query, accId) {
        var _this = this;
        query.page = query.page ? query.page : 1;
        var url = "transaction_accounts/" + accId + "/transactions";

        var getAll = function (acc) {
            var get = function (page) {
              if(page.error == "Requested page is out of bounds") {
                console.log(`[PS] no more pages`)
                resolve(acc);
              }

              console.log(`[PS] adding ${page.length} transactions to the result`)
              acc.append(page);
              query.page += 1;
              console.log(`[PS] requesting new page ${query.page}`)
              return _this.context.Client.get(url, void 0, query).then(get)
            };

            return _this.context.Client.get(url, void 0, query).then(get);
        };

        return getAll([]);
    };

    Transactions.prototype.listInTransactionAccountByTitle = function (query, title) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.context.Accounts.getByTitle(title).then(function (acc) {
                resolve(_this.listInTransactionAccount(query, acc.primary_transaction_account.id));
            }, reject);
        });
    };
    return Transactions;
}());
exports.default = Transactions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdHJhbnNhY3Rpb25zL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0NBQW9DO0FBR3BDO0lBQ0Msc0JBQW9CLE9BQTZCO1FBQTdCLFlBQU8sR0FBUCxPQUFPLENBQXNCO0lBRWpELENBQUM7SUFFRCw2QkFBTSxHQUFOLFVBQU8sS0FBMEIsRUFBRSxNQUFlLEVBQUUsUUFBbUI7UUFBdkUsaUJBNEJDO1FBM0JBLElBQUksSUFBSSxHQUFXLENBQUMsQ0FBQztRQUNyQixLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUVsQixJQUFJLEdBQUcsR0FBVyxZQUFTLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxtQkFBZSxDQUFDO1FBRTVFLElBQUksR0FBRyxHQUFpQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXBFLElBQUksTUFBTSxHQUFHLFVBQUMsRUFBWTtZQUN6QixJQUFJLElBQUksQ0FBQyxDQUFDO1lBQ1YsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFFbEIsSUFBSSxJQUFJLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUV2RCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztnQkFDVixFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDO1lBRUgsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNiLENBQUMsQ0FBQztRQUVGLE1BQU0sQ0FBQyxJQUFJLE9BQU8s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
