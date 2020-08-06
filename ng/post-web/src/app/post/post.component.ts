import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

import { ConsumeApiService } from './../consume-api-service/consume-api.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'], 
  providers: [Post]
})
export class PostComponent implements OnInit {

  posts: Observable<Post[]>;
  public service: ConsumeApiService;
  private searchTerms = new Subject<string>();

  constructor() { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.posts = this.searchTerms.pipe(
      debounceTime(300),

      switchMap((term: string) => this.service.getPosts())
    );
  }
}
