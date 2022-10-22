package com.snp.management.studytest.controller;

import com.snp.management.studytest.domain.StudyTestDTO;
import com.snp.management.studytest.service.StudyTestService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@Slf4j
@RequestMapping(value = "/api")
public class StudyTestController {

    @Autowired
    private StudyTestService studyTestService;

    @RequestMapping ("/studytest")
    public List<StudyTestDTO> getTestList() {
        return studyTestService.getTestList();
    }
}
