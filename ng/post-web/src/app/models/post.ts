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
}
