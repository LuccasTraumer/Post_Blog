package com.code.post.service;

import com.code.post.model.Post;

import java.util.List;

public interface BlogPostService {

    List<Post> findAll();
    Post findById(Long id);
    Post save(Post post);
}
