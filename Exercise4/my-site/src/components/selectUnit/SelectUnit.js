import React, { useEffect, useState } from 'react';
import SelectedLesson from './SelectedLesson';

const SelectUnit = ({selectedUnit}) => {
    const [total, setTotal] = useState(0)

    const totalCalc = ()=>{
        let sum = 0;
    for(let i = 0; i < selectedUnit.length; i++){
        sum += selectedUnit[i].unit
        } 
    setTotal(sum)
    }

    useEffect(()=>{
        totalCalc()    
    }, [])
       
    return ( 
        <div className='tableBox'>
            <table border={1}>
                <tr>
                    <th>Lesson</th>
                    <th>Code</th>
                    <th>Unit</th>
                    <th>Teacher</th>
                </tr>

                    {
                        selectedUnit.map(lesson => (
                            
                            <>
                            <SelectedLesson lesson={lesson}/> 
                            </>
                        ))
                    }
            </table>
           <div>
            <h3>Total Unit : {total}</h3>
           </div>
           
        </div>
     );
}
 
export default SelectUnit;