package com.example.myBlogCode.controller;

import com.example.myBlogCode.model.Post;
import com.example.myBlogCode.service.MyBlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/post")
public class MyBlogController {

    @Autowired
    MyBlogService myService;


    @GetMapping("")
    public ResponseEntity<List<Post>> getPosts() {
        List<Post> posts = myService.getAllPosts();
        if (posts != null)
            return ResponseEntity.ok(posts);
        else
            return ResponseEntity.notFound().build();
    }

    @PostMapping("")
    @ResponseStatus(code = HttpStatus.CREATED)
    public ResponseEntity<Post> add (@RequestBody Post post) {
        if (myService.getPost(post.getId()) != null ){
            return ResponseEntity.badRequest().build();
        } else {
            return ResponseEntity.ok(myService.save(post));
        }
    }

    @DeleteMapping("")
    public void delete(@RequestBody Post post) {
        if (myService.getPost(post.getId()) != null) {
            myService.delete(post);
            ResponseEntity.ok();
        }
        else {
            ResponseEntity.notFound().build();
        }
    }

    @PutMapping("")
    public ResponseEntity<Post> putPost(@RequestBody Post post) {
        if(myService.getPost(post.getId()) != null) {
            return ResponseEntity.ok(myService.putPost(post));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
