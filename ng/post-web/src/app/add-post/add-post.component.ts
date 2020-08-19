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

  editarPost($event) {
    let newPost: Post;
    if (this.hasEditPost) {
      newPost = this.service.getEditPost();
    }
    console.log(newPost.id);
    const autor = (<HTMLInputElement>document.getElementById('txtAutor')).value;
    const titulo = (<HTMLInputElement>document.getElementById('txtTitulo')).value;
    const texto = (<HTMLInputElement>document.getElementById('txtTexto')).value;

    if (autor !== undefined || titulo !== undefined || texto !== undefined) {
      newPost.setAutor(newPost, autor);
      newPost.setTitulo(newPost, titulo);
      newPost.setTexto(newPost, texto);
      
      console.log(newPost.id);
    }
    console.log(newPost.id);
    this.service.editarPost(newPost);
    return;
  }

  hasEditPost(): boolean {
    const post = this.service.getEditPost();
    let temEditPost = false;
    if (post !== undefined) {
      this.preencherInputs(post);
      temEditPost = true;
      return temEditPost;
    }
    return temEditPost;
  }

  preencherInputs(post: Post) {
    const autor = (<HTMLInputElement>document.getElementById('txtAutor'));
    const titulo = (<HTMLInputElement>document.getElementById('txtTitulo'));
    const texto = (<HTMLInputElement>document.getElementById('txtTexto'));
    autor.setAttribute('value', post.autor);
    titulo.setAttribute('value', post.titulo);
    texto.value = post.texto;
  }

  savePost(autor: string, titulo: string, texto: string): void {
    this.post = new Post(autor, titulo, texto);
    this.service.salvarPost(this.post).subscribe(() => {});
    this.service.pegarTodosPosts();
  }
}
