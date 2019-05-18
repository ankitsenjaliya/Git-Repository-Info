import {GithubApiService} from './GithubApiService';
import { User } from './User';
import { Repo } from './Repo';

let svc = new GithubApiService();

svc.getUserInfo("ankitsenjaliya",(user:User)=>{
  console.log(user);
});

svc.getRepos("ankitsenjaliya",(repos:Repo[])=>{
  console.log(repos);
});