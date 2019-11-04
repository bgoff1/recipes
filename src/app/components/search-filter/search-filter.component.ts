import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
  searching = false;
  searchText: string;
  searchSubject: Subject<string> = new Subject();
  @Output() search = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
    this.searchSubject
      .pipe(debounceTime(500))
      .subscribe(res => this.search.emit(res));
  }

  flipSearching() {
    this.searching = !this.searching;
  }

  onKeyUp() {
    this.searchSubject.next(this.searchText);
  }
}
