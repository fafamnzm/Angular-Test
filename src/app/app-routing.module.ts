import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent},
  { path: 'date', component: DatePickerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
