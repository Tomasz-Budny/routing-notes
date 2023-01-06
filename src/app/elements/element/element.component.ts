import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ElementsServiceService } from '../elements-service.service';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit, OnDestroy{
  element: {id, name} = {id: null, name: null};
  data;

  paramsSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private elementsService: ElementsServiceService,
    private router: Router) {}

  ngOnInit(): void {
    // const elementId = this.route.snapshot.params['id'];
    // const element = this.elementsService.elements.find(el => el.id == elementId)
    // if(element) {
    //   this.element = element;
    // }
    // else {
    //   this.router.navigate(['/elements'])
    // }

    // bez tego element nie będzie się przeładowywał jak będąc na danym komponencie zmienimy route 
    // this.paramsSubscription = this.route.params.subscribe(
    //   (params: Params) => {
    //     const elementId = params['id'];
    //     const element = this.elementsService.elements.find(el => el.id == elementId);

    //     if(element) {
    //       this.element = element;
    //     }
    //     else {
    //       this.router.navigate(['/elements'])
    //     }
    //   }
    // )

    this.paramsSubscription = this.route.params.subscribe(
      () => {
        this.element = this.elementsService.element;
        this.elementsService.dataObservable.subscribe(
          req => {
            this.data = req;
          }
        )
      }
    )
  }

  ngOnDestroy(): void {
    // Chociaż chłop teraz mówi, że angular odsubskrybuje za nas więc nie wiem
    // robimy to aby oszczędzić pamieć, ponieważ defaultowo po zniszczeniu komponentu subskrypcja nadal by obowiązywała
    this.paramsSubscription.unsubscribe();
  }
}
