import { Component, OnInit } from '@angular/core';
import { Query } from "@datorama/akita";
import { SessionState, SessionStore } from '../../common/state-manager/state.store';
import { Observable } from 'rxjs';
import { GitHubRepo, GitHubUser } from 'src/app/common/interfaces/github-data';
import { GithubSearchService } from 'src/app/common/services/github-search.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
  providers: [GithubSearchService]
})
export class DetailPageComponent extends Query<SessionState> implements OnInit {

  user: GitHubUser;
  userObs: Observable<GitHubUser>

  constructor(
    protected store: SessionStore,
    private searchSrv: GithubSearchService
  ) {
    super(store);
    this.user = this.getValue().user;
  }

  ngOnInit(): void {
    this.searchSrv.getUserRepos(this.user?.login).subscribe(data => {
      this.user.repoList = data;
    });
  }

}
