import React from 'react';

const SelectedLesson = ({lesson}) => {
    return ( 
        <>
            <tr key={lesson.id}>
                <td>{lesson.lesson_name}</td>
                <td>{lesson.lesson_code}</td>
                <td>{lesson.unit}</td>
                <td>{lesson.teacher}</td>
            </tr>
        </>
     );
}
 
export default SelectedLesson;