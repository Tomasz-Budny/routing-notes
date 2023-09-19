import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  url: string = 'https://test-api-3098f-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(public http: HttpClient) { }

  seedData() {
    this.http.post(this.url + 'tests.json', [
      new TestDTO('Tom', 'Fajny jest'),
      new TestDTO('Bart', 'Fajny jest'),
      new TestDTO('Denis', 'Załęcki')
    ])
  }
}

export class TestDTO {
  constructor(
    public name: string,
    public content: string
  ) {}
}
