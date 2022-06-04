import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/interfaces/list';
import { FetchlistService } from 'src/app/services/fetchlist.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  list: List[] = [];
  listfilter: List[] = [];

  constructor(private fetchlist: FetchlistService) {}

  ngOnInit() {
    this.fetchlist.getList().subscribe((data: List[]) => {
      this.list = data;
      this.listfilter = this.list;
    });
  }

  search(value: string) {
    this.list = this.listfilter.filter((val) =>
      val.listname.toLowerCase().includes(value)
    );
  }
}

// this.fetchlist.getList().subscribe((data : List[])=>{
//     this.list = data;
//     this.listfilter = this.list
//   })
// }
