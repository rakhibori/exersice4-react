import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './styles/main.scss'
import MainPage from './components/MainPage';
import Students from './components/students/Students';
import Lessons from './components/lessons/Lessons';
import Teachers from './components/teachers/Teachers';
import UpdateTeacher from './components/teachers/UpdateTeacher';
import SelectUnit from './components/selectUnit/SelectUnit';
import store from './app/store';
import {Provider} from 'react-redux';


export default function App1() {
    const [flag, setFlag] = useState('mainPage')
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [selectedTeacher, setSelectedTeacher] = useState(null);
    const [selectedUnit, setSelectedUnit] = useState([]);
    const [total, setTotal] = useState(0)
    return(
       <>
            <div>
                <ul className='linkBox'>
                    <li><Link to='/' onClick={()=>setFlag('mainPage')} className={flag==='mainPage' ? 'selectColor' : 'normalColor'}>Main Page</Link></li>
                    <li><Link to='/students' onClick={()=>setFlag('students')} className={flag==='students' ? 'selectColor' : 'normalColor'}>Students</Link></li>
                    <li><Link to='/lessons' onClick={()=>setFlag('lessons')} className={flag==='lessons' ? 'selectColor' : 'normalColor'}>Lessons</Link></li>
                    <li><Link to='teachers' onClick={()=>setFlag('teachers')} className={flag==='teachers' ? 'selectColor' : 'normalColor'}>Teachers</Link></li>
                    <li><Link to='/selectUnit' onClick={()=>setFlag('selectunit')} className={flag==='selectunit' ? 'selectColor' : 'normalColor'}>Selected Unit</Link></li>
                </ul>
            </div>
           <Provider store={store}>
                <Routes><Route path='/' element={<MainPage/>}></Route></Routes>
                <Routes><Route path='/students' element={<Students/>}></Route></Routes>
                <Routes><Route path='/lessons' element={<Lessons selectedLesson={selectedLesson} setSelectedLesson={setSelectedLesson} selectedUnit={selectedUnit} setSelectedUnit={setSelectedUnit}/>}></Route></Routes>
                <Routes><Route path='/teachers' element={<Teachers selectedTeacher={selectedTeacher} setSelectedTeacher={setSelectedTeacher}/>}></Route></Routes>
                <Routes><Route path='/selectUnit' element={<SelectUnit selectedUnit={selectedUnit} total={total}/>}></Route></Routes>
           </Provider>
       </>
    )
}