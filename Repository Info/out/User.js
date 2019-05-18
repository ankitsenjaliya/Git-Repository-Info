"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(userResponse) {
        this.login = userResponse.login;
        this.fullName = userResponse.name;
        this.repoNumber = userResponse.public_repos;
        this.followerCount = userResponse.followers;
        //console.log("Print from User:"+userResponse.login+" "+"this login:"+this.login);
    }
    return User;
}());
exports.User = User;
