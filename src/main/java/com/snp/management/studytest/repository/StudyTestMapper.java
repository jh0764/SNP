package com.snp.management.studytest.repository;

import com.snp.management.studytest.domain.StudyTestDTO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface StudyTestMapper {

    public List<StudyTestDTO> getTestList();
}
