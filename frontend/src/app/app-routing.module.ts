import { StateDetailsComponent } from './components/state-details/state-details.component';
import { StatesComponent } from './components/states/states.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{path: 'states', component: StatesComponent},
  { path: 'state-details/:id', component: StateDetailsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
