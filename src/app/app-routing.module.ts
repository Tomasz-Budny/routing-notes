import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementComponent } from './elements/element/element.component';
import { ElementsComponent } from './elements/elements.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouteGuardService } from './route-guard.service';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test', component: TestComponent },
  { path: 'elements', component: ElementsComponent },
  { path: 'elements/:id', component: ElementComponent, canActivate: [RouteGuardService] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
