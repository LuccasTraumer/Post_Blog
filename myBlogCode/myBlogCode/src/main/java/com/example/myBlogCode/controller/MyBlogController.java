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

    @GetMapping("/user")
    public ResponseEntity<Post> getById(@RequestParam String id) {
        if (myService.getPost(id) != null) {
            return ResponseEntity.ok(myService.getPost(id));
        } else {
          return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("")
    @ResponseStatus(code = HttpStatus.CREATED)
    public ResponseEntity<Post> add (@RequestBody Post post) {
        if (myService.getPost(post.getId()) == null ) {
            return ResponseEntity.ok(myService.save(post));
        } else {
            return ResponseEntity.status(500).build();
        }
    }

    @DeleteMapping("")
    public void delete(@RequestParam String id) {
        if (myService.getPost(id) != null ){
            Post postToDeleted = myService.getPost(id);
            myService.delete(postToDeleted);
            if (myService.getPost(postToDeleted.getId()) == null) {
                 ResponseEntity.ok().build();
            }
        } else {
            ResponseEntity.badRequest();
        }
    }

    @PutMapping("")
    public ResponseEntity<Post> putPost(@RequestBody Post post) {
        if (myService.getPost(post.getId()) != null ) {
            return ResponseEntity.ok(myService.putPost(post));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
