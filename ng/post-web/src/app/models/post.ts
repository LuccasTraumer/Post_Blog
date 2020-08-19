export class Post {
    id: string;
    autor: string;
    titulo: string;
    texto: string;
    data: string;

    constructor(autor: string, titulo: string, texto: string) {
        this.autor = autor;
        this.titulo = titulo;
        this.texto = texto;
    }

    setAutor(post: Post, novoAutor): void {
        post.autor = novoAutor;
    }

    setTitulo(post: Post, novoTitulo): void {
        post.titulo = novoTitulo;
    }

    setTexto(post: Post, novoTexto): void {
        post.texto = novoTexto;
    }
}
