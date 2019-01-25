import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChoiceContainerComponent } from './container/choice-container/choice-container.component';

const routes: Routes = [{
  path: 'user/:token', component: ChoiceContainerComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
