package com.code.MyCodeBlog.repository;

import com.code.MyCodeBlog.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MycodeBlogRepository extends JpaRepository<Post, Long> {
}
