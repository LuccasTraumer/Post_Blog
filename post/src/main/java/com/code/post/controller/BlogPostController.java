package com.code.post.controller;

import com.code.post.model.Post;
import com.code.post.service.BlogPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Controller
public class BlogPostController {
    @Autowired
    BlogPostService blogPostService;  //Colocamos a Interface por conta de precise mudar algo, só iremos alterar em um só lugar

    @RequestMapping(value = "posts", method = RequestMethod.GET)
    public ModelAndView getPosts() {
        populateData();
        ModelAndView mv = new ModelAndView("posts");
        //List<Post> posts = blogPostService.findAll();
        List<Post> posts = populateData();
        mv.addObject("posts", posts);

        return mv;
    }

    private List<Post> populateData() {
        List<Post> posts = new ArrayList<>();
        posts.add(new Post(new Long(1), "Lucas", "Titulo", "Texto 1", LocalDate.now()));
        posts.add(new Post(new Long(2), "David", "Titulo 2", "Texto 2", LocalDate.now()));
        posts.add(new Post(new Long(3), "Matheus", "Titulo 3", "Texto 2", LocalDate.now()));
        posts.add(new Post(new Long(4), "Miguel", "Titulo 4", "Texto 4", LocalDate.now()));

        return posts;
    }

}
