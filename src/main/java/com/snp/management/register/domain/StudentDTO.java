package com.snp.management.register.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StudentDTO {
    private Long saveId;
    private String name;
    private String genderRadio;
    private String email;
    private String phone;
    private String school;
    private String grade;
    private String gradeLv;
    private int gradeLv2;
    private String family;
    private String fatherPhone;
    private String motherPhone;
    private int classType;
    private String address1;
    private String address2;
    private int speed;
    private int intelligibility;
    private int readLv;
    private String note;

}
