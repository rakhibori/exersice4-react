import React, { useState } from 'react';
import { useGetStudentsQuery, useRemoveStudentMutation } from '../../app/services/studentsApi';
import Student from './Student';
import AddStudent from './AddStudent';

const Students = () => {
    const [visible, setVisible] = useState(false)
    const [page, setPage] = useState(1)
    const {data: students, isLoading, isFetching , isError, error} = useGetStudentsQuery(page);
    const [removeStudent] = useRemoveStudentMutation()

    if(isLoading || isFetching){
        return <div>Loading...</div>
    }

    if(isError){
        return <div>Error : {error.status}</div>
    }

    return ( 
        <>
            <div className='titleBox'>
                <h2>Students List : </h2> 
            </div>
            <div className='mainBox'>
                {
                    students.map(student => (
                        <Student key={student.id} student={student} removeStudent={removeStudent} page={page} setPage={setPage}/>
                    ))
                }    
            </div>  
            <div className='buttonPage'>
                <button disabled={page <= 1} onClick={() => setPage((prev)=>prev -1)}>Prev</button>
                <button disabled={students.length < 8} onClick={() => setPage(prev=>prev +1)}>Next</button>
            </div>  
            <div className='btnBox'>
                <button onClick={()=>setVisible(true)} className='btn'>Add Student</button>
                {visible && <AddStudent/>} 
            </div>
        </>
     );
}
 
export default Students;