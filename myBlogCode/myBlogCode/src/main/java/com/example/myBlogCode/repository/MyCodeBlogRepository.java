package com.example.myBlogCode.repository;

import com.example.myBlogCode.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MyCodeBlogRepository extends MongoRepository<Post, Long> {
}
