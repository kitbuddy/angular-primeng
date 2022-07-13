import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompOneComponent } from './components/comp-one/comp-one.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatPaginatorModule} from "@angular/material/paginator";
import { PercentagePipePipe } from './pipes/percentage-pipe.pipe';
import { MultiplyBy100Pipe } from './pipes/multiply-by100.pipe';
import { CompTwoComponent } from './components/comp-two/comp-two.component';
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import { HomeComponent } from './components/home/home.component';
import { CheckDirectiveDirective } from './directives/check-directive.directive';
import { CompThreeComponent } from './components/comp-three/comp-three.component';
import { IfDirectiveDirective } from './directives/if-directive.directive';
import {FormsModule} from "@angular/forms";
import { ToggleDirectiveDirective } from './directives/toggle-directive.directive';
import { LoginPageComponent } from './components/login-page/login-page.component';
import {DialogModule} from "primeng/dialog";
import {DividerModule} from "primeng/divider";
import { CompFourScrollingComponent } from './components/comp-four-scrolling/comp-four-scrolling.component';
import { SideBarForCompOneComponent } from './side-bar-for-comp-one/side-bar-for-comp-one.component';
import {SidebarModule} from "primeng/sidebar";
import {ButtonModule} from "primeng/button";
import {MatCardModule} from "@angular/material/card";
import {TabViewModule} from "primeng/tabview";
import { MenuItemsComponent } from './components/menu-items/menu-items.component';
import {SlideMenuModule} from "primeng/slidemenu";
import { CompParentComponent } from './components/comp-parent/comp-parent.component';
import { CompChildComponent } from './components/comp-child/comp-child.component';

@NgModule({
  declarations: [
    AppComponent,
    CompOneComponent,
    PercentagePipePipe,
    MultiplyBy100Pipe,
    CompTwoComponent,
    HomeComponent,
    CheckDirectiveDirective,
    CompThreeComponent,
    IfDirectiveDirective,
    ToggleDirectiveDirective,
    LoginPageComponent,
    CompFourScrollingComponent,
    SideBarForCompOneComponent,
    MenuItemsComponent,
    CompParentComponent,
    CompChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    DialogModule,
    DividerModule,
    SidebarModule,
    ButtonModule,
    MatCardModule,
    TabViewModule,
    SlideMenuModule,
  ],
  exports: [CheckDirectiveDirective],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
