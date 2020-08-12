package com.code.MyCodeBlog.service;

import com.code.MyCodeBlog.model.Post;

import java.util.List;

public interface MyCodeBlogService {

    List<Post> findAll();
    Post       findById(Long id);
    Post       save(Post post);
}
