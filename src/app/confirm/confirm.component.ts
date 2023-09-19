import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  validationStatus: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ verified }) => {
      this.validationStatus = verified ? "Twoje konto jest aktywne :D" : "Coś poszło nie tak nie mogliśmy aktywować twojego konta :(";
    });
  }
}
