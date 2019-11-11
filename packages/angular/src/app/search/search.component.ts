import { Component } from '@angular/core';
import { Subject } from 'rxjs';

import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  input$ = new Subject<string>();

  options = [];

  constructor(private searchService: SearchService) {
    this.searchService.searchUsers(this.input$).subscribe(users => {
      this.options = users;
    });
  }
}
