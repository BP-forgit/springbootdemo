package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ApplyForPostingController {
    @RequestMapping("/ApplyForPosting")
    public String editPage() {
        return "ApplyForPosting";
    }
}

 