package com.snp.management.studytest.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudyTestController {
    @GetMapping("/api/studytest")
    public String Radartest(){
        return "테스트 중";

    }
}
