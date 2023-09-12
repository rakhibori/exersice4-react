import React, {useState} from 'react';
import { useUpdateTeacherMutation } from '../../app/services/teachersApi';

const UpdateTeacher = ({selectedTeacher}) => {
    const [updateLesson, {isLoading}] = useUpdateTeacherMutation()
    const [newName, setNewName] = useState();
    const [newFamily, setNewFamily] = useState();
    const [newPersonnelId, setNewPersonnelId] = useState();
    const [newLessons, setNewLessons] = useState();

    const handleUpdateLesson = async()=>{
        await updateLesson({id: selectedTeacher.id, name:  newName, family: newFamily, personnel_id: newPersonnelId, lessons: [newLessons]});
        setNewName('')
        setNewFamily('')
        setNewPersonnelId('')
        setNewLessons('')
    }

    return ( 
        <>
             
            <div className='formBox'>
                    <div className='pBox'>
                        <p>{selectedTeacher ? `Your Selected Teacher : ${selectedTeacher.id} - ${selectedTeacher.name} ${selectedTeacher.family}` : 'No Selected Teacher'}</p>
                    </div>
                    <input type='text' placeholder='Name' value={newName} onChange={(e)=>setNewName(e.target.value)}/>
                    <input type='text' placeholder='Fanily' value={newFamily} onChange={(e)=>setNewFamily(e.target.value)}/>
                    <input type='number' placeholder='Personnel Id' value={newPersonnelId} onChange={(e)=>setNewPersonnelId(e.target.value)}/>
                    <input type='text' placeholder='Lesson' value={newLessons} onChange={(e)=>setNewLessons(e.target.value)}/>
                    <button onClick={handleUpdateLesson} disabled={isLoading}>Update</button>
                
            </div>
        </>
     );
}
 
export default UpdateTeacher;