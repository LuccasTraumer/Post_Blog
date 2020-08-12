package com.example.myBlogCode.controller;

import com.example.myBlogCode.model.Post;
import com.example.myBlogCode.service.MyBlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/")
public class MyBlogController {

    @Autowired
    MyBlogService myService;


    @GetMapping("/posts")
    public List<Post> getPosts() {
        return myService.getAllPosts();
    }

    @GetMapping("/post{id}")
    public Post getById(@RequestParam String id) {
        return myService.getPost(id);
    }

    @PostMapping("/post")
     public ResponseEntity<Post> addPost (@RequestBody Post newPost) {
        newPost.setData();
        if(newPost == null || newPost.getAutor() == null || newPost.getTitulo() == null){
            return ResponseEntity.status(406).build();
        }
        return ResponseEntity.ok(myService.save(newPost));
    }

    @DeleteMapping("/post{id}")
    @ResponseStatus(code = HttpStatus.ACCEPTED)
    public void deletePost (@RequestParam String id) {
        myService.delete(id);
    }

    @PutMapping("/post")
    public Post putPost(@RequestBody Post newPost) {
        return myService.putPost(newPost);
    }
}
