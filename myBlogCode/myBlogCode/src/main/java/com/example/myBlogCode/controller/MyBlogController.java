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
        if(newPost != null)
            System.out.println(newPost);
        return ResponseEntity.ok(myService.save(newPost));
    }

    @DeleteMapping("/post")
    @ResponseStatus(code = HttpStatus.ACCEPTED)
    public void deletePost (@RequestBody Post newPost) {
        myService.delete(newPost);
    }

    @PutMapping("/post")
    public Post putPost(@RequestBody Post newPost) {
        return myService.putPost(newPost);
    }
}
