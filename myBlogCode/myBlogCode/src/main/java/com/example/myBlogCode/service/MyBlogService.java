package com.example.myBlogCode.service;

import com.example.myBlogCode.model.Post;

import java.util.List;

public interface MyBlogService {

    List<Post> getAllPosts();
    Post getPost(Long id);
    Post save(Post p);
}
