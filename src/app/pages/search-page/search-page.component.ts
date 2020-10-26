import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GitHubUser } from 'src/app/common/interfaces/github-data';
import { GithubSearchService } from '../../common/services/github-search.service';
import { SessionService } from "../../common/state-manager/state.store";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  providers: [GithubSearchService, SessionService]
})
export class SearchPageComponent {

  searchField$ = new Subject<string>();
  user: GitHubUser;
  loading = false;

  constructor(
    private searchSrv: GithubSearchService,
    private router: Router,
    private sessionSrv: SessionService
  ) {
    this.searchSrv.search(this.searchField$)
      .subscribe(result => {
        this.user = result;
        this.loading = false;
      });
  }
  
  /**
   * Triggers GitHub user search and maps the content to an object
   * 
   * @param {any} event
   * @memberof SearchPageComponent
   */
  onSearchChange(event: any): void {
    this.loading = true;   
    this.searchField$.next(event.target.value);
  }

  goDetail(user: GitHubUser) {
    this.sessionSrv.updateUser(user);
    this.router.navigate(['/detail']);
  }
  
}
