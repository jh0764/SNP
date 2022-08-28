package com.snp.management.register.service;

import com.snp.management.register.domain.StudentDTO;
import com.snp.management.register.repository.StudentRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@Transactional
public class StudentServiceInt {
    @Autowired
    StudentService studentService;
    @Autowired
    StudentRepository studentRepository;
    

    @Test
    public void register(){
        StudentDTO studentDTO = new StudentDTO();
        studentDTO.setName("김영준");
        studentDTO.setSchool("구서초등학교");

    }
}
