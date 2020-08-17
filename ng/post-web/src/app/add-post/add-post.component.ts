import { ConsumeApiService } from './../consume-api-service/consume-api.service';
import { Post } from './../models/post';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { $ } from 'protractor';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit, AfterViewInit {

  editPost: Post;

  post = {} as Post;
  posts: Post[];

  putPost: Post;

  constructor(private service: ConsumeApiService) { }

  ngAfterViewInit(): void {
    this.hasEditPost();
  }

  ngOnInit(): void { }

  buttonClicked($event) {
    const autor = (<HTMLInputElement>document.getElementById('txtAutor')).value;
    const titulo = (<HTMLInputElement>document.getElementById('txtTitulo')).value;
    const texto = (<HTMLInputElement>document.getElementById('txtTexto')).value;
    if (autor !== undefined || titulo !== undefined || texto !== undefined) {
      this.savePost(autor, titulo, texto);
    } else {
      window.alert('Algum campos está vazio!');
    }
  }

  editarPost(post: Post) {
    this.service.editarPost(post);
    return;
  }

  hasEditPost() {
    const post = this.service.getEditPost();
    if (post !== undefined) {
      console.log(post.autor);
      const autor = (<HTMLInputElement>document.getElementById('txtAutor'));
      const titulo = (<HTMLInputElement>document.getElementById('txtTitulo'));
      const texto = (<HTMLInputElement>document.getElementById('txtTexto'));
      autor.setAttribute('value', post.autor);
      titulo.setAttribute('value', post.titulo);
      texto.value = post.texto;
      return true;
    }
    return false;
  }

  savePost(autor: string, titulo: string, texto: string): void {
    this.post = new Post(autor, titulo, texto);
    this.service.salvarPost(this.post).subscribe(() => {});
    this.service.pegarTodosPosts();
  }

  getPutPost(post: Post) {
    console.log('Get Put Post: ' + post);
  }
}
