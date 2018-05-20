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
  	console.log(newPost);
  }

  removePost(post: Post){
  	const postIndexToRemove = this.myFindIndex(post);
  	this.posts.splice(postIndexToRemove, 1);
  	this.emitPosts();
  }

  myFindIndex(post: Post){
  	return this.posts.findIndex(
  		(postEl) => {
  			if(postEl === post){
  				return true;
  			}
  		}
  	);
  }

  changeLoveIts(post: Post, nb: number){
  	const postToLove = this.myFindIndex(post);
  	this.posts[postToLove].loveIts += nb;
  	this.emitPosts();
  }

}
