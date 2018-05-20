import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})

export class PostService {


	postSubject = new Subject<Post[]>();
	posts = [
		  new Post('Mon premier post', 'In his tractibus navigerum nusquam visitur flumen sed in locis plurimis aquae suapte natura calentes emergunt ad usus aptae multiplicium medelarum. verum has quoque regiones pari sorte Pompeius Iudaeis domitis et Hierosolymis captis in provinciae speciem delata iuris dictione formavit.'),
		  new Post('test', 'lorem ipsum blablabla')
	  ];

  constructor() { }

  emitPosts(){
  	this.postSubject.next(this.posts);
  }

  createNewPost(newPost: Post){
  	this.posts.push(newPost);
  	this.emitPosts();
  }

  removePost(post: Post, postIndexToRemove: number){
  	this.posts.splice(postIndexToRemove, 1);
  	this.emitPosts();
  }

  changeLoveIts(post: Post, nb: number, postToLove: number){
  	this.posts[postToLove].loveIts += nb;
  	this.emitPosts();
  }

}
