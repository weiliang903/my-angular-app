import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeroService } from './hero.service';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  // declarations数组包含应用中属于该模块的组件、管道和指令的列表。组件在被其它组件引用之前必须先在一个模块中声明过。
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
