import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './news/news.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {path:'news', component: NewsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    NewsComponent
  ],
  exports: [RouterModule],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
