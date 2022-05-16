import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './ReactiveForm/reactive-form.component';

const routes: Routes = [
  {path:'reactive', component:ReactiveFormComponent},
  {path:'', component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
