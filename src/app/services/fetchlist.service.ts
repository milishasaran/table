import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { List } from '../interfaces/list';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchlistService {
  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get<List[]>('http://localhost:3000/list');
  }
}
