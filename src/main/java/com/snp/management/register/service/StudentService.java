package com.snp.management.register.service;

import com.snp.management.register.repository.StudentRepository;

public class StudentService {
    private StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }
}
