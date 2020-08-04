package com.example.myBlogCode.controller;

import com.example.myBlogCode.model.Post;
import com.example.myBlogCode.service.MyBlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
