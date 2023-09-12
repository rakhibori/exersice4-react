import React from 'react';

const Student = ({student, removeStudent}) => {
    return ( 
        <>
             <div className='studentBox'>
                <ul>
                    <li>Name : {student.name}</li>
                    <li>Family : {student.family}</li>
                    <li>Student Number : {student.student_number}</li>
                    <li>Field of Study : {student.field_of_study}</li>
                    </ul>
                <div className='btn'>
                    <button onClick={()=>removeStudent(student.id)}>Remove</button>
                </div>
                
            </div>
        </>
       
     );
}
 
export default Student;