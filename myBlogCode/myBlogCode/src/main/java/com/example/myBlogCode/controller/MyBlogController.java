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
    public Post add (@RequestBody Post post) {
        System.out.println(post);
        return myService.save(post);
    }

    @DeleteMapping("")
    public void delete(@RequestBody Post post) {
        myService.delete(post);
    }

    @PutMapping("")
    public Post putPost(@RequestBody Post post) {
        return myService.putPost(post);
    }
}
