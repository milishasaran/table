import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { List } from 'src/app/interfaces/list';
import { FetchlistService } from 'src/app/services/fetchlist.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  list: List[] = [];
  listfilter: List[] = [];

  constructor(private fetchlist: FetchlistService) {}

  ngOnInit(): void {
    this.fetchlist.getList().subscribe((data: List[]) => {
      this.list = data;
      this.listfilter = this.list;
    });
  }
}
