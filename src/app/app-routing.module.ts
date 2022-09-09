import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompOneComponent} from "./components/comp-one/comp-one.component";
import {CompTwoComponent} from "./components/comp-two/comp-two.component";
import {HomeComponent} from "./components/home/home.component";
import {CompThreeComponent} from "./components/comp-three/comp-three.component";
import {CompFourScrollingComponent} from "./components/comp-four-scrolling/comp-four-scrolling.component";
import {CompChildComponent} from "./components/comp-child/comp-child.component";
import {CompParentComponent} from "./components/comp-parent/comp-parent.component";
import {MuralComponent} from "./components/mural/mural.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'comp-I', component: CompOneComponent },
  { path: 'comp-II', component: CompTwoComponent },
  { path: 'comp-III', component: CompThreeComponent },
  { path: 'comp-IV', component: CompFourScrollingComponent },
  { path: 'comp-parent', component: CompParentComponent},
  { path: 'comp-child', component: CompChildComponent },
  { path: 'mural', component: MuralComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
