import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { List } from '../interfaces/list';
import { FetchlistService } from './fetchlist.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  data: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}

  getData() {
    this.http.get<List[]>('http://localhost:3000/list');
  }
}
