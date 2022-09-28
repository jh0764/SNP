import * as React from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./Studyform.css"

const Studyform = () => {
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
                    <TextField id="1" label="1번"></TextField>
                    <TextField id="8" label="8번"></TextField>
                    <TextField id="15" label="15번"></TextField>
                    <TextField id="22" label="22번"></TextField>
                    <TextField id="29" label="29번"></TextField>
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
                    <TextField id="2" label="2번"></TextField>
                    <TextField id="9" label="9번"></TextField>
                    <TextField id="16" label="16번"></TextField>
                    <TextField id="23" label="23번"></TextField>
                    <TextField id="30" label="30번"></TextField>
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
                    <TextField id="3" label="3번"></TextField>
                    <TextField id="10" label="10번"></TextField>
                    <TextField id="17" label="17번"></TextField>
                    <TextField id="24" label="24번"></TextField>
                    <TextField id="31" label="31번"></TextField>
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
                    <TextField id="4" label="4번"></TextField>
                    <TextField id="11" label="11번"></TextField>
                    <TextField id="18" label="18번"></TextField>
                    <TextField id="25" label="25번"></TextField>
                    <TextField id="32" label="32번"></TextField>
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
                    <TextField id="5" label="5번"></TextField>
                    <TextField id="12" label="12번"></TextField>
                    <TextField id="19" label="19번"></TextField>
                    <TextField id="26" label="26번"></TextField>
                    <TextField id="33" label="33번"></TextField>
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
                    <TextField id="6" label="6번"></TextField>
                    <TextField id="13" label="13번"></TextField>
                    <TextField id="20" label="20번"></TextField>
                    <TextField id="27" label="27번"></TextField>
                    <TextField id="34" label="34번"></TextField>
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
                    <TextField id="7" label="7번"></TextField>
                    <TextField id="14" label="14번"></TextField>
                    <TextField id="21" label="21번"></TextField>
                    <TextField id="28" label="28번"></TextField>
                    <TextField id="35" label="35번"></TextField>
                </Box>
            </div>

        </form>


    )
}

export default Studyform;