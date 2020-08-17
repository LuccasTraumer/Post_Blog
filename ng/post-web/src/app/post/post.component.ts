import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, from } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { ConsumeApiService } from './../consume-api-service/consume-api.service';
import { Post } from '../models/post';
import { environment } from 'src/environments/environment.dev';
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
    console.log(value);
    if (value === '' || value === undefined) {
      this.value = ' ';
    }
    else{
      this.value = value;
      this.service.pegarPostPorId(value).subscribe(() => {});
    }
  }

  editPost(post: Post) {
    this.service.editarPost(post);
    console.log('Edita Post');
    this.service.storeToEdit(post);
  }

  deletarPost(id: string) {
    this.service.deletarPost(id).subscribe(() => {});
    console.log('Deleta Post');
    this.getPosts();
  }
}
