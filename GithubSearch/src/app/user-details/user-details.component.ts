import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { User } from '../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  users: User ;
  repository: Repository;

  constructor() { }

  ngOnInit(): void {
  }

}
