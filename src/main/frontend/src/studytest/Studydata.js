import React, {useEffect, useState} from 'react';
import axios from 'axios';


const Studydata = () => {
    const [studydata, setStudydata] = useState([]);

    let data1 = [];
    axios
        .get("/api/studytest")
        .then(res => {
            console.log(res);
            for(const dataObj of res.data.data){
                data1.push(parseInt(dataObj.studydata));
            }
        })
        .catch(err =>{
            console.log(err);
        });
    console.log(data1);

// function StudyDataApi(){
// const [data, setData] = useState([]);
// useEffect(()=>{
//     axios.get('/api/studytest')
//         .then((response) =>{
//             setData(Object.values(response.data))
//             console.log("성공")
//         });
// },[])
// React.useEffect(() => {
//     axios.get("/api/studytest")
//         .then(result =>{
//             setData(Object.keys(result.data).map(key => result.data[key].value));
//             console.log("성공");
//         });
// },[]);



    return(
        <div>


        </div>

    )
}
export default Studydata;