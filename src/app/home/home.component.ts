import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {}

  onClick() {
    // do something else

    // metoda ta pozwala iść do wybranych przez nas ścieżek. Tutaj jak przekażemy test zamiast /test nie wyrzuci nam błedu ponieważ router nie wie na jakim kommponencie się znajudjemy.
    this.router.navigate(['/test'])
  }
}
