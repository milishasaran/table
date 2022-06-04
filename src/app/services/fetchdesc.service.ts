import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { List } from '../interfaces/list';

@Injectable({
  providedIn: 'root',
})
export class FetchdescService {
  constructor(private http: HttpClient, private router: Router) {}

  getDescription(id: number) {
    return this.http.get<List>(`http://localhost:3000/list/${id}`).pipe(
      catchError((err) => {
        this.router.navigateByUrl('/404');
        return EMPTY;
      })
    );
  }
}
