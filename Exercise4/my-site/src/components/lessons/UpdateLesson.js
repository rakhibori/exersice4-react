import React, {useState} from 'react';
import { useUpdateLessonMutation } from '../../app/services/lessonsApi';

const UpdateLesson = ({selectedLesson}) => {
    const [updateLesson, {isLoading}] = useUpdateLessonMutation()
    const [newLesson, setNewLesson] = useState();
    const [newCode, setNewCode] = useState();
    const [newUnit, setNewUnit] = useState();
    const [newTeacher, setNewTeacher] = useState();

    const handleUpdateLesson = async()=>{
        await updateLesson({id: selectedLesson.id, lesson_name:  newLesson, lesson_code: newCode, unit: newUnit, teacher: newTeacher});
        setNewLesson('')
        setNewCode('')
        setNewUnit('')
        setNewTeacher('')
    }

    return ( 
        <>
            <div className='formBox'>
                    <div className='pBox'>
                        <p>{selectedLesson ? `Your Selected Lesson : ${selectedLesson.id} - ${selectedLesson.lesson_name} - ${selectedLesson.teacher}` : 'No Selected Lesson'}</p>
                    </div>
                    <input type='text' placeholder='Lesson' value={newLesson} onChange={(e)=>setNewLesson(e.target.value)}/>
                    <input type='number' placeholder='Code' value={newCode} onChange={(e)=>setNewCode(e.target.value)}/>
                    <input type='number' placeholder='Unit' value={newUnit} onChange={(e)=>setNewUnit(e.target.value)}/>
                    <input type='text' placeholder='Teacher' value={newTeacher} onChange={(e)=>setNewTeacher(e.target.value)}/>
                    <button onClick={handleUpdateLesson} disabled={isLoading}>Update</button>
                
            </div>
        </>
     );
}
 
export default UpdateLesson;