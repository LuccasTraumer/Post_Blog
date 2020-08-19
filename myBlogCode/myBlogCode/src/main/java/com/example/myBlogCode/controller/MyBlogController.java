package com.example.myBlogCode.controller;

import com.example.myBlogCode.model.Post;
import com.example.myBlogCode.service.MyBlogService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/")
public class MyBlogController {

    final static Logger LOG = LoggerFactory.getLogger(MyBlogController.class);

    @Autowired
    MyBlogService myService;


    @GetMapping("/posts")
    public List<Post> getPosts() {
        LOG.info("Pegando todos os Posts do Banco de Dados");
        return myService.getAllPosts();
    }

    @GetMapping("/post{id}")
    public ResponseEntity<Post> getById(@RequestParam String id) {
        Post response = myService.getPost(id);
        if (response != null) {
            LOG.info("Pegando o Post de ID: " + id);
            return ResponseEntity.status(200).build();
        }
        LOG.error("Não encontrado Post com ID: " + id);
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/post")
     public ResponseEntity<Post> addPost (@RequestBody Post newPost) {
        Post response = myService.save(newPost);
        if (response != null) {
            LOG.info("Post adicionado com sucesso! " + response);
            return ResponseEntity.status(201).build();
        }
        LOG.error("Não conseguiu incluir o Post " + response);
        return ResponseEntity.status(401).build();
    }

    @DeleteMapping("/post{id}")
    public ResponseEntity<Post> deletePost (@RequestParam String id) {
        Post response = myService.delete(id);
        if (response != null) {
            LOG.info("Deletando o Post: " + response);
            return ResponseEntity.status(202).build();
        }
        LOG.error("Erro ao Deletar o Post com ID: " + id);
        return ResponseEntity.status(304).build();
    }

    @PutMapping("/post")
    public ResponseEntity<Post> putPost(@RequestBody Post newPost) {
        Post response = myService.putPost(newPost);
        if (response != null) {
            LOG.info("Alterando o Post: " + response);
            return ResponseEntity.status(205).build();
        }
        LOG.error("Erro ao Deleta o Post: " + newPost);
        return ResponseEntity.notFound().build();
    }
}
