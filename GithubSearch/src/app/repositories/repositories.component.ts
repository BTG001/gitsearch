import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { SearchServiceService } from '../search-service.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  providers: [SearchServiceService],
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repository: Repository;
    public searchRepo: string;
   

    searchRepos(ange) {
        this.searchRepo = '';

    }

    constructor(public gitRepoRequest:  SearchServiceService) { }

  ngOnInit() {
     
      this.gitRepoRequest.gitRepos(this.searchRepo);

}
}
