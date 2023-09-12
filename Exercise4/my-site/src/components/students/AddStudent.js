import React, { useState } from 'react';
import { useAddStudentMutation } from '../../app/services/studentsApi';

const AddStudent = () => {
    const [addStudent, {isLoading}] = useAddStudentMutation();
    const [newName, setNewName] = useState();
    const [newFamily, setNewFamily] = useState();
    const [newStudentNumber, setNewStudentNumber] = useState();
    const [newFieldOfStudy, setNewFieldOfStudy] = useState();


    const handleAddStudent = async()=>{
        if(newName && newFamily && newStudentNumber && newFieldOfStudy){
            await addStudent({name: newName, family: newFamily, student_number: newStudentNumber, field_of_study: newFieldOfStudy})
            setNewName('');
            setNewFamily('');
            setNewStudentNumber('');
            setNewFieldOfStudy('');
        }
    }
    
    return ( 
        <>
            <div className='mainStudentBox'>
                
                    <input type='text' placeholder='Name' value={newName} onChange={(e)=>setNewName(e.target.value)}/>
                    <input type='text' placeholder='Family' value={newFamily} onChange={(e)=>setNewFamily(e.target.value)}/>
                    <input type='number' placeholder='Student Number' value={newStudentNumber} onChange={(e)=>setNewStudentNumber(e.target.value)}/>
                    <input type='text' placeholder='Field Of Study' value={newFieldOfStudy} onChange={(e)=>setNewFieldOfStudy(e.target.value)}/>
                    <button onClick={handleAddStudent} disabled={isLoading}>Add</button>
                
            </div>
        </>
     );
}
 
export default AddStudent;