package com.snp.management.controller.register;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class StudentRegisterController {


    @GetMapping("/register/student")
    public String register (){

        return "register/studentRegister";
    }

}
