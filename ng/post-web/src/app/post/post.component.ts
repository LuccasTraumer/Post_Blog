import { Observable, Subject, from } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { ConsumeApiService } from './../consume-api-service/consume-api.service';
import { Post } from '../models/post';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit, OnChanges {

  post = {} as Post;
  posts: Post[];

  value = '';

  constructor(private service: ConsumeApiService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.service.pegarTodosPosts();
  }

  ngOnInit(): void {
    this.getPosts();
   }

  getPosts() {
    this.service.pegarTodosPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  buscarPorId(value: string) {
    if (value === '' || value === undefined) {
      this.value = ' ';
    }
    else{
      this.value = value;
      this.service.pegarPostPorId(value);
    }
  }

  editPost(post: Post) {
    this.service.editarPost(post);
    console.log('Edita Post');
  }

  deletarPost(post: Post) {
    this.service.deletarPost(post).subscribe(() => {});
    console.log('Deleta Post');
    this.getPosts();
  }
}
