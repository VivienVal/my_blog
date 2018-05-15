import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postDate = new Date();
  @Input() postLoveIts: number;
  @Input() postContent: string;

  constructor() { }

  ngOnInit() {
  }

  onLoveIts(){
  	this.postLoveIts++;
  }

  onDontLoveIts(){
  	this.postLoveIts--;
  }

}
