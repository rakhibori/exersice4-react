import React, { useState } from 'react';
import { useGetLessonsQuery, useRemoveLessonMutation } from '../../app/services/lessonsApi';
import Lesson from './Lesson';
import UpdateLesson from '../lessons/UpdateLesson';

const Lessons = ({setSelectedLesson, selectedUnit, setSelectedUnit, total, setTotal, selectedLesson}) => {
    const [visible, setVisible] = useState(false)
    const [page, setPage] = useState(1)
    const {data: lessons, isLoading, isFetching , isError, error} = useGetLessonsQuery(page);
    const [removeLesson] = useRemoveLessonMutation()

    if(isLoading || isFetching){
        return <div>Loading...</div>
    }

    if(isError){
        return <div>Error : {error.status}</div>
    }

    return ( 
        <>
            <div className='titleBox'>
                <h2>Lessons List : </h2> 
            </div>
            <div className='mainBox'>
                {
                    lessons.map(lesson => (
                        <Lesson key={lesson.id} lesson={lesson} removeLesson={removeLesson} page={page} setPage={setPage} setSelectedLesson={setSelectedLesson} selectedUnit={selectedUnit} setSelectedUnit={setSelectedUnit} total={total} setTotal={setTotal}/>
                    ))
                }    
            </div>  
            <div className='buttonPage'>
                <button disabled={page <= 1} onClick={() => setPage((prev)=>prev -1)}>Prev</button>
                <button disabled={lessons.length < 8} onClick={() => setPage(prev=>prev +1)}>Next</button>
            </div>  
            <div className='btnBox'>
                <button className='btn' onClick={()=>setVisible(true)}>Update Lessons</button>
                {visible && <UpdateLesson selectedLesson={selectedLesson}/>}
            </div>
        </>
     );
}
 
export default Lessons;