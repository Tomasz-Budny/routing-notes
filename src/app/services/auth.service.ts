import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URl: string = "https://localhost:7179/api/auth/confirm";

  constructor(
    public http: HttpClient
  ) { }

  public confirmEmail(token: string) {
    return this.http.post(this.URl, null, {
      params: {
        token: token
      }
    })
    .pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }
}
