import { ConsumeApiService } from './../consume-api-service/consume-api.service';
import { Post } from './../models/post';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { $ } from 'protractor';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  post = {} as Post;
  posts: Post[];

  @Input()
  putPost: Post;

  constructor(private service: ConsumeApiService) { }

  ngOnInit(): void {
  }

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

  savePost(autor: string, titulo: string, texto: string): void {
    this.post = new Post(autor, titulo, texto);
    this.service.salvarPost(this.post).subscribe(() => {});
    this.service.pegarTodosPosts();
  }

}
