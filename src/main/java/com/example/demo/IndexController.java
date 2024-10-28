package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = {""})
public class IndexController {

    private static final List<Jobs> Job;
    static {
        Job = new ArrayList<>();
        Job.add(new Jobs("Sales Manager", "2"));

    }
    @RequestMapping("/index")
    public String editPage() {
          return "index";
        }
    }