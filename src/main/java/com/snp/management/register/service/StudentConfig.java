package com.snp.management.register.service;

import com.snp.management.register.repository.JdbcStudentRepository;
import com.snp.management.register.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
public class StudentConfig {
    private DataSource dataSource;
    @Autowired
    public StudentConfig(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @Bean
    public StudentRepository studentRepository() {
        return new JdbcStudentRepository();
    }

    @Bean
    public StudentService studentService() {
        return new StudentService(studentRepository());
    }
}

