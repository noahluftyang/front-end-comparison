import { Component } from '@angular/core';
import { Subject } from 'rxjs';

import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  input$ = new Subject<string>();

  options = [];

  constructor(private usersService: UsersService) {
    this.usersService.searchUsers(this.input$).subscribe(users => {
      this.options = users;
    });
  }
}
