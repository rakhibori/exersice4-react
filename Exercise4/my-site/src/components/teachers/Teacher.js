import React from 'react';

const Teacher = ({teacher, removeTeacher, setSelectedTeacher}) => {
    return ( 
        <>
             <div className='teacherBox'>
                <ul>
                    <li>Name : {teacher.name}</li>
                    <li>Family : {teacher.family}</li>
                    <li>personnel Id : {teacher.personnel_id}</li>
                    <li>Lessons : <ul> {teacher.lessons.map(lesson=>(
                         <li>
                              {lesson}   
                         </li>
                    ))}</ul></li>
                    </ul>
               <div className='btn'>
                    <button onClick={()=>setSelectedTeacher(teacher)}>Edit</button>
                    <button onClick={()=>removeTeacher(teacher.id)}>Remove</button>
               </div>
            </div>
        </>
     );
}
 
export default Teacher;