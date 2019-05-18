"use strict";
exports.__esModule = true;
var GithubApiService_1 = require("./GithubApiService");
var svc = new GithubApiService_1.GithubApiService();
svc.getUserInfo("ankitsenjaliya", function (user) {
    console.log(user);
});
svc.getRepos("ankitsenjaliya", function (repos) {
    console.log(repos);
});
