import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GitHubUser } from '../../interfaces/github-data';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() user: GitHubUser;
  @Input() content = false;
  @Output() clickFunction = new EventEmitter<GitHubUser>();

  constructor() { }

  ngOnInit(): void {
  }

  emitCallback () {
    this.clickFunction.emit(this.user);
  }

}
