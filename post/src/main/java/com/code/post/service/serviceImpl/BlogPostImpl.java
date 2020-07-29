package com.code.post.service.serviceImpl;

import com.code.post.model.Post;
import com.code.post.repository.BlogPostRepository;
import com.code.post.service.BlogPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogPostImpl implements BlogPostService {

    @Autowired
    BlogPostRepository blogPostRepository;

    @Override
    public List<Post> findAll() {
        return blogPostRepository.findAll();
    }

    @Override
    public Post findById(Long id) {
        return blogPostRepository.findById(id).get();
    }

    @Override
    public Post save(Post post) {
        return blogPostRepository.save(post);
    }
}
