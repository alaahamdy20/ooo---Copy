import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './Compoents/students/students.component';
import { UpdateComponent } from './Compoents/update/update.component';
import { ViewComponent } from './Compoents/view/view.component';

const routes: Routes = [
  {path:"",component:StudentsComponent},
  {path:"students",component:StudentsComponent},
  {path:"view/:id",component:ViewComponent},
  {path:"update/:id",component:UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
