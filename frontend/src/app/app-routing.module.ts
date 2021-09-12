import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSymbolsComponent } from './modules/add-symbols/add-symbols.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {
    component: HomeComponent, path: ''
  },
  {
    component: AddSymbolsComponent, path: 'add-symbols'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
