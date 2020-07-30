package com.code.MyCodeBlog.service.serviceImpl;

import com.code.MyCodeBlog.model.Post;
import com.code.MyCodeBlog.repository.MycodeBlogRepository;
import com.code.MyCodeBlog.service.MyCodeBlogService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class BlogPostImpl implements MyCodeBlogService {

    @Autowired
    MycodeBlogRepository myCodeBlogRepository;

    @Override
    public List<Post> findAll() {
        return myCodeBlogRepository.findAll();
    }

    @Override
    public Post findById(Long id) {
        return myCodeBlogRepository.findById(id).get();
    }

    @Override
    public Post save(Post post) {
        return myCodeBlogRepository.save(post);
    }
}
