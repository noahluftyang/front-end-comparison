import { Component, OnInit } from '@angular/core';

import { SearchService } from '../services/search.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  input$ = new Subject<string>();

  options = [];

  constructor(private searchService: SearchService) {
    this.searchService.searchProjects(this.input$).subscribe(projects => {
      this.options = projects;
    });
  }
}
