import { Routes, RouterModule,Router } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'post',
    component: PostComponent
  },
  {
    path: '**',
    component: ErrorComponent,
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    ErrorComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }