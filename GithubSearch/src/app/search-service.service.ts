import { Injectable } from '@angular/core';
import { Repository } from './repository';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  repository: Repository;
    users: User;
    newRepository: any;
    searchRepo: any;

  constructor() { }
}
