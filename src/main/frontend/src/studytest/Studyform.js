import * as React from 'react';
import {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./Studyform.css"
import {useSum1, useSum2, useSum3, useSum4, useSum5, useSum6, useSum7} from "./useSum";

const Studyform = () => {

    const [sum1 ,setA, setB, setC, setD, setE] = useSum1();
    const [sum2 ,set1, set2, set3, set4, set5] = useSum2();
    const [sum3, set6, set7, set8, set9, set10] = useSum3();
    const [sum4, set11, set12, set13, set14, set15] = useSum4();
    const [sum5, set16, set17, set18, set19, set20] = useSum5();
    const [sum6, set21, set22, set23, set24, set25] = useSum6();
    const [sum7, set26, set27, set28, set29, set30] = useSum7();

    return (
        <form>
            <h2>학습습관검사</h2>


                <div className="border1">
                    <label>언어전달에 대한 능력과 이해도&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 2, width: '6ch' },
                    }}
                    noValidate
                    autoComplete="off">
                    <TextField onChange={(e) => setA(e.target.value)}  label="1번"></TextField>
                    <TextField onChange={(e) => setB(e.target.value)}  label="8번"></TextField>
                    <TextField onChange={(e) => setC(e.target.value)}  label="15번"></TextField>
                    <TextField onChange={(e) => setD(e.target.value)} label="22번"></TextField>
                    <TextField onChange={(e) => setE(e.target.value)}  label="29번"></TextField>

                    <span>{sum1}</span>
                </Box>
                </div>
            <div className="border1">
                <label>계획성 있는 생활습관과 실천도&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 2, width: '6ch' },
                    }}
                    noValidate
                    autoComplete="off">
                    <TextField onChange={(e) => set1(e.target.value)} label="2번"></TextField>
                    <TextField onChange={(e) => set2(e.target.value)}  label="9번"></TextField>
                    <TextField onChange={(e) => set3(e.target.value)}  label="16번"></TextField>
                    <TextField onChange={(e) => set4(e.target.value)}  label="23번"></TextField>
                    <TextField onChange={(e) => set5(e.target.value)} label="30번"></TextField>

                    <span>{sum2}</span>
                </Box>
            </div>
            <div className="border1">
                <label>책에 대한 관심도와 실천도&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 2, width: '6ch' },
                    }}
                    noValidate
                    autoComplete="off">
                    <TextField onChange={(e) => set6(e.target.value)}  label="3번"></TextField>
                    <TextField onChange={(e) => set7(e.target.value)}  label="10번"></TextField>
                    <TextField onChange={(e) => set8(e.target.value)}  label="17번"></TextField>
                    <TextField onChange={(e) => set9(e.target.value)} label="24번"></TextField>
                    <TextField onChange={(e) => set10(e.target.value)}  label="31번"></TextField>

                    <span>{sum3}</span>
                </Box>
            </div>
            <div className="border1">
                <label>작문에 대한 능력과 실행도&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 2, width: '6ch' },
                    }}
                    noValidate
                    autoComplete="off">
                    <TextField onChange={(e) => set11(e.target.value)}  label="4번"></TextField>
                    <TextField onChange={(e) => set12(e.target.value)}  label="11번"></TextField>
                    <TextField onChange={(e) => set13(e.target.value)}  label="18번"></TextField>
                    <TextField onChange={(e) => set14(e.target.value)}  label="25번"></TextField>
                    <TextField onChange={(e) => set15(e.target.value)}  label="32번"></TextField>

                    <span>{sum4}</span>
                </Box>
            </div>
            <div className="border1">
                <label>주변의 교육적 환경과 집중력&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 2, width: '6ch' },
                    }}
                    noValidate
                    autoComplete="off">
                    <TextField onChange={(e) => set16(e.target.value)}  label="5번"></TextField>
                    <TextField onChange={(e) => set17(e.target.value)}  label="12번"></TextField>
                    <TextField onChange={(e) => set18(e.target.value)} label="19번"></TextField>
                    <TextField onChange={(e) => set19(e.target.value)}  label="26번"></TextField>
                    <TextField onChange={(e) => set20(e.target.value)}  label="33번"></TextField>

                   <span>{sum5}</span>
                </Box>
            </div>
            <div className="border1">
                <label>사고력과 창의력에 대한 능력&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 2, width: '6ch' },
                    }}
                    noValidate
                    autoComplete="off">
                    <TextField onChange={(e) => set21(e.target.value)} label="6번"></TextField>
                    <TextField onChange={(e) => set22(e.target.value)}  label="13번"></TextField>
                    <TextField onChange={(e) => set23(e.target.value)}  label="20번"></TextField>
                    <TextField onChange={(e) => set24(e.target.value)}  label="27번"></TextField>
                    <TextField onChange={(e) => set25(e.target.value)}  label="34번"></TextField>

                    <span>{sum6}</span>
                </Box>
            </div>
            <div className="border1">
                <label>자기 주도식 학습에 대한 태도와 실천도</label>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 2, width: '6ch' },
                    }}
                    noValidate
                    autoComplete="off">
                    <TextField onChange={(e) => set26(e.target.value)}  label="7번"></TextField>
                    <TextField onChange={(e) => set27(e.target.value)}  label="14번"></TextField>
                    <TextField onChange={(e) => set28(e.target.value)}  label="21번"></TextField>
                    <TextField onChange={(e) => set29(e.target.value)}  label="28번"></TextField>
                    <TextField onChange={(e) => set30(e.target.value)}  label="35번"></TextField>

                    <span>{sum7}</span>
                </Box>
            </div>


        </form>


    )
}

export default Studyform;