"use strict";
exports.__esModule = true;
var Repo = /** @class */ (function () {
    function Repo(repo) {
        this.name = repo.name;
        this.description = repo.description;
        this.url = repo.html_url;
        this.size = repo.html_size;
        this.forkCount = repo.html_forks;
    }
    return Repo;
}());
exports.Repo = Repo;
