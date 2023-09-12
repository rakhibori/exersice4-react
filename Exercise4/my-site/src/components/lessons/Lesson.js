import React from 'react';

const Lesson = ({lesson, removeLesson, setSelectedLesson, selectedUnit, setSelectedUnit}) => {

     const addUnit = (lesson) => {
          if(selectedUnit.length < 1) {
               setSelectedUnit([...selectedUnit, lesson]) 
          }
          else{
               const index = selectedUnit.indexOf(lesson)
               if(index === -1) {
                    selectedUnit.push(lesson)
                    let sum = 0;
                    for(let i = 0; i < selectedUnit.length; i++){
                         sum += selectedUnit[i].unit
                    } 
                    if(sum > 20){
                         alert('You can’t choose more than 20 units')  
                         selectedUnit.pop(lesson)  
                    }
               }else{
                    alert('You have selected thie lesson')
               }
          }  
     }
    return ( 
        <>
             <div className='lessonBox'>
                <ul>
                    <li>Lesson : {lesson.lesson_name}</li>
                    <li>Code : {lesson.lesson_code}</li>
                    <li>Unit : {lesson.unit}</li>
                    <li>Teacher : {lesson.teacher}</li>
                    </ul>
               <div className='btn'>
                    <button onClick={()=>setSelectedLesson(lesson)}>Edit</button>
                    <button onClick={()=>removeLesson(lesson.id)}>Remove</button>
                    <button onClick={()=>addUnit(lesson)}>Add</button>
               </div>
            </div>
        </>
     );
}
 
export default Lesson;