import { Component } from '@angular/core';
import { ElementsServiceService } from './elements-service.service';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent {
  elements

  constructor(private elementsService: ElementsServiceService) {
    this.elements = elementsService.elements;
  }
}
