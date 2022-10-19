package com.snp.management.studytest.service;

import com.snp.management.studytest.domain.StudyTestDTO;
import com.snp.management.studytest.repository.StudyTestMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudyTestServiceImpl implements StudyTestService{

    @Autowired
    private StudyTestMapper studyTestMapper;

    @Override
    public List<StudyTestDTO> getTestList(){
        return studyTestMapper.getTestList();
    }



}
