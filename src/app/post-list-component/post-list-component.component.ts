import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs/Subscription';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit, OnDestroy {

  posts: Post[];
  postSubscription: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit() { 
    this.postService.getPosts();
    this.postSubscription = this.postService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPosts();
  }

  onLoveIts(post: Post, i: number){
    this.postService.changeLoveIts(post, 1, i);
  }

  onDontLoveIts(post: Post, i: number){
  	this.postService.changeLoveIts(post, -1, i);
  }

  onDeletePost(post: Post, i: number){
    this.postService.removePost(post, i);
  }

  ngOnDestroy(){
    this.postSubscription.unsubscribe();
  }

}
