import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementComponent } from './elements/element/element.component';
import { ElementsComponent } from './elements/elements.component';
import { GuardTestComponent } from './guard-test/guard-test.component';
import { TestItemComponent } from './guard-test/test-item/test-item.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouteGuardService } from './route-guard.service';
import { TestComponent } from './test/test.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ConfirmEmailResolver } from './resolvers/confirm-email-resolver';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'confirm', component: ConfirmComponent, resolve: { verified:  ConfirmEmailResolver} },
  { path: 'test', component: TestComponent },
  { path: 'elements', component: ElementsComponent },
  { path: 'elements/:id', component: ElementComponent, canActivate: [RouteGuardService] },
  { path: 'guard-tests', component: GuardTestComponent, children: [
    { path: ':id', component: TestItemComponent }
  ] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
