import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})

export class PostService {


	postSubject = new Subject<Post[]>();
	posts = [];

  constructor() { }

  emitPosts(){
  	this.postSubject.next(this.posts);
  }

  createNewPost(newPost: Post){
  	this.posts.push(newPost);
  	this.emitPosts();
  	this.savePosts();
  }

  removePost(post: Post, postIndexToRemove: number){
  	this.posts.splice(postIndexToRemove, 1);
  	this.emitPosts();
  	this.savePosts();
  }

  changeLoveIts(post: Post, nb: number, postToLove: number){
  	this.posts[postToLove].loveIts += nb;
  	this.emitPosts();
  	this.savePosts();
  }

  savePosts(){
  	firebase.database().ref('/posts').set(this.posts);
  }

  getPosts(){
  	firebase.database().ref('/posts')
  		.on('value', (data: DataSnapshot) => {
  			this.posts = data.val() ? data.val() : [];
  			this.emitPosts();
  		}
	);
  }
}
