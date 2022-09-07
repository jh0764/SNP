package com.snp.management.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class maincontroller {

    @GetMapping("main")
    public String main() {

        return "main";
    }

//    @GetMapping("join")
//    public String join() {
//
//        return "join";
//    }

}
