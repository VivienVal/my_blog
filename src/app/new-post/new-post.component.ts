import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  newPostForm: FormGroup;

  constructor(	private router: Router,
  				private formBuilder: FormBuilder,
  				private postService: PostService) { }

  ngOnInit() {
  	this.initForm();
  }

  initForm(){
  	this.newPostForm = this.formBuilder.group({
  		title: ['', Validators.required],
  		content: ['', Validators.required]
  	});
  }

  onSubmit(){
  	const title = this.newPostForm.get('title').value;
  	const content = this.newPostForm.get('content').value;
  	const newPost = new Post(title, content);
  	this.postService.createNewPost(newPost);
  	this.router.navigate(['/posts']);
  }

}
