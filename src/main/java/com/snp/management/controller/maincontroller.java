package com.snp.management.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class maincontroller {

    @GetMapping("main")
    public String main() {

        return "main";
    }

    @GetMapping("join")
    public String join() {

        return "join";
    }
    @GetMapping("/api/hello")
    public String test() {
        return "Hello, world!";
    }

}
