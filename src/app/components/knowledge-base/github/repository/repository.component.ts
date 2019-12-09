import { Component, OnInit } from '@angular/core';
import { GitHubRepository } from 'src/app/models/github';
import { GitHubService } from 'src/app/services/github/github.service';

/**
 * Repository component.
 */
@Component({
  selector: 'training-knowledge-base-github-repository',
  templateUrl: './repository.component.html',
  styleUrls: [
    '../github.component.less'
  ]
})
export class RepositoryComponent implements OnInit {
  /**
   * Error message.
   */
  public errorMessage: string;

  /**
   * GitHub gists or error.
   */
  public gitHubRepositories: GitHubRepository[] | Error;

  /**
   * No description available placeholder.
   */
  public noDescriptionAvailablePlaceholder: string;

  /**
   * Search term.
   */
  public searchTerm: string;

  constructor(private gitHubService: GitHubService) { }

  ngOnInit(): void {
    this.gitHubService.getGitHubRepositories().subscribe(
      data => {
        this.gitHubRepositories = data;
      }, error => {
        this.errorMessage = error.message;
      });
    this.noDescriptionAvailablePlaceholder = 'No description available.';
    this.searchTerm = '';
  }
}
