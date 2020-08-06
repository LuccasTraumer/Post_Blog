package com.example.myBlogCode.service.serviceImpl;

import com.example.myBlogCode.model.Post;
import com.example.myBlogCode.repository.MyCodeBlogRepository;
import com.example.myBlogCode.service.MyBlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceImplement implements MyBlogService {

    @Autowired
    MyCodeBlogRepository myRepository;

    @Override
    public List<Post> getAllPosts() {
        return myRepository.findAll();
    }

    @Override
    public Post getPost(String id) {
        return myRepository.findById(id).get();
    }

    @Override
    public Post save(Post p) {
        return myRepository.save(p);
    }

    @Override
    public void delete(Post post) {
        myRepository.delete(post);
    }

    @Override
    public Post putPost(Post post) {
        if (myRepository.existsById(post.getId())) {
            save(post);
            return post;
        }
        return null;
    }
}
