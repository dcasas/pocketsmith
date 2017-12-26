"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("bluebird");
var exceptions_1 = require("../exceptions");
var Accounts = (function () {
    function Accounts(context) {
        this.context = context;
    }
    Accounts.prototype.get = function (id, callback) {
        return this.context.Client.get("accounts/" + id, callback);
    };
    Accounts.prototype.getByTitle = function (title, callback) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getAll().then(function (accs) {
                var acc = accs.find(function (a) { return a.title == title; });
                resolve(acc);
                if (!(callback === void 0)) {
                    callback(acc);
                }
            }, function (err) { reject(err); });
        });
    };
    Accounts.prototype.getAllByUser = function (userId, callback) {
        return this.context.Client.get("users/" + userId + "/accounts", callback);
    };
    Accounts.prototype.getAllByInstitution = function (institutionId, callback) {
        return this.context.Client.get("institutions/" + institutionId + "/accounts", callback);
    };
    Accounts.prototype.getAll = function (callback) {
        if (this.context.Me) {
            return this.getAllByUser(this.context.Me.data.id, callback);
        }
        else {
            throw exceptions_1.NotInMeContext();
        }
    };
    return Accounts;
}());
exports.default = Accounts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWNjb3VudHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrQ0FBb0M7QUFHcEMsNENBQTZDO0FBRTdDO0lBQ0Msa0JBQW9CLE9BQTZCO1FBQTdCLFlBQU8sR0FBUCxPQUFPLENBQXNCO0lBRWpELENBQUM7SUFFRCxzQkFBRyxHQUFILFVBQUksRUFBVSxFQUFFLFFBQW1CO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBWSxFQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELDZCQUFVLEdBQVYsVUFBVyxLQUFhLEVBQUUsUUFBbUI7UUFBN0MsaUJBVUM7UUFUQSxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSTtnQkFDdEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBTSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUNaLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVCLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixDQUFDO1lBQ0YsQ0FBQyxFQUFFLFVBQUEsR0FBRyxJQUFNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELCtCQUFZLEdBQVosVUFBYSxNQUFjLEVBQUUsUUFBbUI7UUFDL0MsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFTLE1BQU0sY0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxzQ0FBbUIsR0FBbkIsVUFBb0IsYUFBcUIsRUFBRSxRQUFtQjtRQUM3RCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGtCQUFnQixhQUFhLGNBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBR0QseUJBQU0sR0FBTixVQUFPLFFBQW1CO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzdELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLE1BQU0sMkJBQWMsRUFBRSxDQUFDO1FBQ3hCLENBQUM7SUFDRixDQUFDO0lBQ0YsZUFBQztBQUFELENBQUMsQUFyQ0QsSUFxQ0MifQ==