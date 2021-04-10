import React from 'react';
import Course from './course';

const Student = (props) => {
    let result = [];
    for (let i of props.enrolled.split(',')){
        result.push(<p><b><Course number={i}/></b></p>);
    };
    return <p> Student <b>{props.name}</b> with <b>{props.number}</b>
           <p>Student is enrolled in</p>
           {result}
           </p> ;
};

export default Student;