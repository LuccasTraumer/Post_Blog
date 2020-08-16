package com.example.myBlogCode.service.serviceImpl;

import com.example.myBlogCode.model.Post;
import com.example.myBlogCode.repository.MyCodeBlogRepository;
import com.example.myBlogCode.service.MyBlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
        if (id != null || id.isEmpty()) {
            return myRepository.findById(id).get();
        }
        return null;
    }

    @Override
    public Post save(Post newPost) {
        newPost.setData();
        if(newPost == null || newPost.getAutor() == null || newPost.getTitulo() == null) {
            return null;
        }
        return myRepository.save(newPost);
    }

    @Override
    public Post delete (String id) {
        Post post = null;
        if (id != null && !id.isEmpty()) {
            post = this.getPost(id);
        }
        return post;
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
