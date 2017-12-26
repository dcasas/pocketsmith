"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Got = require("got");
var Promise = require("bluebird");
var Client = (function () {
    function Client(token) {
        this.token = token;
    }
    Client.prototype.resource = function (method, url, payload) {
        var _this = this;
        console.log("method " + method + ", url: " + url + ", payload: " + payload);
        return new Promise(function (resolve, reject) {
            Got("https://api.pocketsmith.com/v2/" + url, {
                method: method,
                json: true,
                retries: 0,
                query: payload || void 0,
                headers: {
                    'Authorization': _this.token,
                    'Content-Type': 'application/json'
                }
            })
                .then(function (response) {
                resolve(response.body);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    Client.prototype.get = function (url, callback, payload) {
        var prom = this.resource('GET', url, payload);
        if (!(callback === void 0)) {
            prom.then(function (resp) {
                callback(resp);
            });
        }
        return prom;
    };
    Client.prototype.post = function (url, callback, payload) {
        var prom = this.resource('POST', url, payload);
        if (!(callback === void 0)) {
            prom.then(function (resp) {
                callback(resp);
            });
        }
        return prom;
    };
    Client.prototype.put = function (url, callback, payload) {
        var prom = this.resource('PUT', url, payload);
        if (!(callback === void 0)) {
            prom.then(function (resp) {
                callback(resp);
            });
        }
        return prom;
    };
    return Client;
}());
exports.default = Client;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlCQUEyQjtBQUMzQixrQ0FBb0M7QUFFcEM7SUFDQyxnQkFBb0IsS0FBYTtRQUFiLFVBQUssR0FBTCxLQUFLLENBQVE7SUFBSSxDQUFDO0lBRTlCLHlCQUFRLEdBQWhCLFVBQWlCLE1BQWMsRUFBRSxHQUFXLEVBQUUsT0FBYTtRQUEzRCxpQkFvQkM7UUFuQkEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFVLE1BQU0sZUFBVSxHQUFHLG1CQUFjLE9BQVMsQ0FBQyxDQUFBO1FBQ2pFLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2xDLEdBQUcsQ0FBQyxvQ0FBa0MsR0FBSyxFQUFFO2dCQUM1QyxNQUFNLEVBQUUsTUFBTTtnQkFDZCxJQUFJLEVBQUUsSUFBSTtnQkFDVixPQUFPLEVBQUUsQ0FBQztnQkFDVixLQUFLLEVBQUUsT0FBTyxJQUFJLEtBQUssQ0FBQztnQkFDeEIsT0FBTyxFQUFFO29CQUNSLGVBQWUsRUFBRSxLQUFJLENBQUMsS0FBSztvQkFDM0IsY0FBYyxFQUFFLGtCQUFrQjtpQkFDbEM7YUFDRCxDQUFDO2lCQUNBLElBQUksQ0FBQyxVQUFBLFFBQVE7Z0JBQ2IsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QixDQUFDLEVBQUUsVUFBQSxHQUFHO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ2hCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNiLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsb0JBQUcsR0FBSCxVQUFJLEdBQVcsRUFBRSxRQUFtQixFQUFFLE9BQWE7UUFDbEQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRTlDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7Z0JBQ2QsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUQscUJBQUksR0FBSixVQUFLLEdBQVcsRUFBRSxRQUFtQixFQUFFLE9BQWE7UUFDbkQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRS9DLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7Z0JBQ2QsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUQsb0JBQUcsR0FBSCxVQUFJLEdBQVcsRUFBRSxRQUFtQixFQUFFLE9BQWE7UUFDbEQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRTlDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7Z0JBQ2QsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDYixDQUFDO0lBQ0YsYUFBQztBQUFELENBQUMsQUE1REQsSUE0REM7QUFFRCxrQkFBZSxNQUFNLENBQUMifQ==