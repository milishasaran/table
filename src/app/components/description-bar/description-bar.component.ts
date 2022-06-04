import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { List } from 'src/app/interfaces/list';
import { FetchdescService } from 'src/app/services/fetchdesc.service';

@Component({
  selector: 'app-description-bar',
  templateUrl: './description-bar.component.html',
  styleUrls: ['./description-bar.component.css'],
})
export class DescriptionBarComponent implements OnInit {
  listdet!: List;

  constructor(
    private fetchdesc: FetchdescService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      const { id } = params;
      this.fetchdesc.getDescription(id).subscribe((list) => {
        this.listdet = list;
      });
    });
  }
}
