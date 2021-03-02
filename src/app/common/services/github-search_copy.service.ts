import { GitHubRepo, GitHubUser } from '../interfaces/github-data';
import { Observable, of } from "rxjs";
import { catchError, debounceTime, map, switchMap } from "rxjs/operators";

import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable()
export class GithubSearchCopyService {

	apiUrl = 'https://api.github.com';

	/**
	 * Creates an instance of GithubSearchService.
	 * @param {HttpClient} http
	 * @memberof GithubSearchCopyService
	 */
	constructor(
		private http: HttpClient
	) { }

	/**
	 * Function called whenever the user fills the search input
	 * It includes some operators to prevent the app from http-request-flooding the API server
	 *
	 * @param {Observable<string>} value
	 * @return {Observable<GitHubUser>} 
	 * @memberof GithubSearchCopyService
	 */
	search(value: Observable<string>): Observable<GitHubUser> {
		return value.pipe(
			debounceTime(400),
			switchMap(value => this.getUserInfo(value))
		);
	}

	/**
	 * Duplicate code to proc Sonar analysis
	 * @param value 
	 */
	searchCopy(value: Observable<string>): Observable<GitHubUser> {
		return value.pipe(
			debounceTime(400),
			switchMap(value => this.getUserInfo(value))
		);
	}

	/**
	 * Gets GitHub user information
	 *
	 * @param {string} username
	 * @return {Observable<any>} 
	 * @memberof GithubSearchService
	 */
	getUserInfo(username: string): Observable<GitHubUser> {
		return this.http.get(`${this.apiUrl}/users/${username}`).pipe(
			// Catching and managing error
			catchError(err => of([])
			),
			map((response: GitHubUser) => {
				return {
					login: response?.login,
					avatar_url: response?.avatar_url,
					name: response?.name,
					public_repos: response?.public_repos,
					followers: response?.followers
				}
			})
		);
	}


	/**
	 * Gets GitHub repository info list for the user passed by parameter
	 *
	 * @param {string} username
	 * @return {*}  {Observable<GitHubRepo>}
	 * @memberof GithubSearchService
	 */
	getUserRepos(username: string): Observable<GitHubRepo[]> {
		return this.http.get(`${this.apiUrl}/users/${username}/repos`).pipe(
			// Catching and managing error
			catchError(err => of([])
			),
			map((response: GitHubRepo[]) => {
				const repoList = [];
				response.forEach(item => {
					repoList.push({
						name: item.name,
						private: item.private,
						description: item.description,
						html_url: item.html_url
					})
				})
				return repoList;
			})
		);
	}

}