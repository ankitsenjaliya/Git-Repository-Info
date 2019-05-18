import {Repo} from "./Repo";

export class User {
  login: string;
  fullName: string;
  repoNumber: number;
  followerCount: number;
  repos?: Repo[];

  constructor(userResponse:any)
  {
    this.login = userResponse.login;
    this.fullName = userResponse.name;
    this.repoNumber = userResponse.public_repos;
    this.followerCount = userResponse.followers;
    //console.log("Print from User:"+userResponse.login+" "+"this login:"+this.login);
  }
}