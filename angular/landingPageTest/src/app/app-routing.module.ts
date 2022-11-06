import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabecarioComponent } from './components/cabecario/cabecario.component';


const routes: Routes = [
{
path: '',
component: CabecarioComponent

}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
