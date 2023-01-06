import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElementsServiceService {
  element;
  dataObservable;

  elements = [
    {id: 1, name: 'test1'},
    {id: 2, name: 'test2'},
    {id: 3, name: 'test3'},
    {id: 4, name: 'test4'},
    {id: 5, name: 'test5'},
  ]

  constructor(private http: HttpClient) { }

  canGet(id: number) {
    const element = this.elements.find(el => el.id === id);
    if(element) {
      this.element = element;
      return true;
    }
    return false;
  }

  getRandomData() {
    this.dataObservable = this.http.get('https://random-data-api.com/api/v2/users');
  }
}
