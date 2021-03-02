import { GithubSearchService } from './github-search.service';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

describe('GithubSearchService', () => {
	let service: GithubSearchService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [GithubSearchService],
			imports: [HttpClientModule]
		});
		service = TestBed.inject(GithubSearchService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
