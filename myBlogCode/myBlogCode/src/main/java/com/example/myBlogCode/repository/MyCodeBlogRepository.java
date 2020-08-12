package com.example.myBlogCode.repository;

import com.example.myBlogCode.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin()
public interface MyCodeBlogRepository extends MongoRepository<Post, String> {
}
