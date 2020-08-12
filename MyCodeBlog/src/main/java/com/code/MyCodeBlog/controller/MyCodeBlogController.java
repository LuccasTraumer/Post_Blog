package com.code.MyCodeBlog.controller;

import com.code.MyCodeBlog.model.Post;
import com.code.MyCodeBlog.service.MyCodeBlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
public class MyCodeBlogController {
    @Autowired
    MyCodeBlogService blogPostService;  //Colocamos a Interface por conta de precise mudar algo, só iremos alterar em um só lugar

    @RequestMapping(value = "posts", method = RequestMethod.GET)
    public ModelAndView getPosts() {
        ModelAndView mv = new ModelAndView("posts");
        List<Post> posts = blogPostService.findAll();
        mv.addObject("posts", posts);

        return mv;
    }
}
