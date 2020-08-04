package com.example.myBlogCode.model;

import com.sun.istack.internal.NotNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Document("PostP")
public class Post {

    @Id
    private Long id;

    @NotNull
    private String autor;

    private String titulo;

    private String texto;

    private LocalDate data;

    public Post(Long id, String autor, String titulo, String texto, LocalDate data) {
        this.id = id;
        this.autor = autor;
        this.titulo = titulo;
        this.texto = texto;
        this.data = data;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getTexto() {
        return texto;
    }

    public void setTexto(String texto) {
        this.texto = texto;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return "Post{" +
                "id=" + id +
                ", autor='" + autor + '\'' +
                ", titulo='" + titulo + '\'' +
                ", texto='" + texto + '\'' +
                ", data=" + data +
                '}';
    }
}
