import React, { useState } from 'react';
import { useGetTeachersQuery, useRemoveTeacherMutation } from '../../app/services/teachersApi';
import Teacher from './Teacher';
import UpdateTeacher from './UpdateTeacher';

const Teachers = ({setSelectedTeacher, selectedTeacher}) => {
    const [visible, setVisible] = useState(false)
    const [page, setPage] = useState(1)
    const {data: teachers, isLoading, isFetching , isError, error} = useGetTeachersQuery(page);
    const [removeTeacher] = useRemoveTeacherMutation()

    if(isLoading || isFetching){
        return <div>Loading...</div>
    }

    if(isError){
        return <div>Error : {error.status}</div>
    }

    return ( 
        <>
            <div className='titleBox'>
                <h2>Teachers List : </h2> 
            </div>
            <div className='mainBox'>
                {
                    teachers.map(teacher => (
                        <Teacher key={teacher.id} teacher={teacher} removeTeacher={removeTeacher} setSelectedTeacher={setSelectedTeacher}/>
                    ))
                }    
            </div>  
            <div className='buttonPage'>
                <button disabled={page <= 1} onClick={() => setPage((prev)=>prev -1)}>Prev</button>
                <button disabled={teachers.length < 8} onClick={() => setPage(prev=>prev +1)}>Next</button>
            </div> 
            <div className='btnBox'>
                <button className='btn' onClick={()=>setVisible(true)}>Update Teacher</button> 
                {visible && <UpdateTeacher selectedTeacher={selectedTeacher}/>}   
            </div> 
        </>
     );
}
 
export default Teachers;