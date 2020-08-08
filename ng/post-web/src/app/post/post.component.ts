import { Observable, Subject, from } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

import { ConsumeApiService } from './../consume-api-service/consume-api.service';
import { Post } from '../models/post';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  post = {} as Post;
  posts: Post[];

  constructor(private service: ConsumeApiService) { }

  ngOnInit(): void {
    this.getPosts();
    console.log(this.posts);
   }

  getPosts() {
    this.service.getAllPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

}
