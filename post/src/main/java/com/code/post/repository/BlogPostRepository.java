package com.code.post.repository;

import com.code.post.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogPostRepository extends JpaRepository<Post, Long> {
}
