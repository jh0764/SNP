package com.snp.management.register.controller;

import com.snp.management.register.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class StudentRegisterController {

    private final StudentService studentService;

    public StudentRegisterController(StudentService studentService) {
        this.studentService = studentService;
    }

    @Autowired

    @GetMapping("/register/student")
    public String register (){

        return "register/studentRegister";
    }

}
