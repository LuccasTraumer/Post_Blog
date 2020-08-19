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


  autor;
  titulo;
  texto;

  constructor(private service: ConsumeApiService) { }

  ngAfterViewInit(): void {
    this.hasEditPost();
  }

  ngOnInit(): void { }

  buttonClicked($event) {
    this.autor = (<HTMLInputElement>document.getElementById('txtAutor')).value;
    this.titulo = (<HTMLInputElement>document.getElementById('txtTitulo')).value;
    this.texto = (<HTMLInputElement>document.getElementById('txtTexto')).value;
    if (this.validaCamposInput()) {
      this.savePost(this.autor, this.titulo, this.texto);
    } else {
      window.alert('Algum campos está vazio!');
    }
  }

  editarPost($event) {
    let newPost: Post;
    let postEditado: Post;
    if (this.hasEditPost) {
      newPost = this.service.getEditPost();
    }
    this.autor = (<HTMLInputElement>document.getElementById('txtAutor')).value;
    this.titulo = (<HTMLInputElement>document.getElementById('txtTitulo')).value;
    this.texto = (<HTMLInputElement>document.getElementById('txtTexto')).value;

    if (this.validaCamposInput()) {
      postEditado = newPost;
      postEditado.id = newPost.id;
      postEditado.autor = this.autor;
      postEditado.titulo = this.titulo;
      postEditado.texto = this.texto;

    }
    this.service.editarPost(postEditado).subscribe(() => {});
  }

  validaCamposInput(): boolean {
    if (this.autor !== undefined || this.titulo !== undefined || this.texto !== undefined) {
      return true;
    }
    return false;
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
