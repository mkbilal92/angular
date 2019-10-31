import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormcomponentComponent } from './formcomponent/formcomponent.component';
import { ServicePracticeComponent } from './service-practice/service-practice.component';


const routes: Routes = [
  {path:"",component:ServicePracticeComponent},
{path:"formComp/:dataId",component:FormcomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
