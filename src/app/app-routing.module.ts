import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompOneComponent} from "./components/comp-one/comp-one.component";
import {CompTwoComponent} from "./components/comp-two/comp-two.component";
import {HomeComponent} from "./components/home/home.component";
import {CompThreeComponent} from "./components/comp-three/comp-three.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'comp-one', component: CompOneComponent },
  { path: 'comp-two', component: CompTwoComponent },
  { path: 'comp-three', component: CompThreeComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
