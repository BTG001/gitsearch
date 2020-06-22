import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { User } from '../user';
import { SearchServiceService } from '../search-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  providers: [SearchServiceService],
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public searchMe = 'Imaraika';
  public githubUser: string;


  users: User ;
  repository: Repository;


  findUser(username) {
      this.githubUser = '';
      this.searchMe  = username;
      this.ngOnInit();
  }


constructor(public githubUserRequest: SearchServiceService, public userRepos: SearchServiceService) { }

ngOnInit() {
    this.githubUserRequest.githubUser(this.searchMe);
    this.users = this.githubUserRequest.users;
    this.userRepos.gitUserRepos(this.searchMe);
    console.log(this.userRepos);
}
}