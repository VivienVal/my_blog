import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { NewPostComponent } from './new-post/new-post.component';
import { HeaderComponent } from './header/header.component';

import { PostService } from './services/post.service';

const appRoutes = [
	{ path: 'posts', component: PostListComponentComponent},
	{ path: 'post/new', component: NewPostComponent},
	{ path: '', redirectTo: 'posts', pathMatch:"full"},
	{ path: '**', redirectTo: 'posts'}
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    NewPostComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
  	PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
