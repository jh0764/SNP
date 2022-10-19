package com.snp.management.studytest.controller;

import com.snp.management.studytest.domain.StudyTestDTO;
import com.snp.management.studytest.service.StudyTestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api")
public class StudyTestController {

    @Autowired
    private StudyTestService studyTestService;

    @GetMapping("/studytest")
    public List<StudyTestDTO> getTestList() {
        return studyTestService.getTestList();
    }
}
