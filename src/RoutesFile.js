import React from 'react'
import { Route, Routes } from 'react-router-dom';
import ErrorHandler from './Components/ErrorHandler';
import Home from './Components/Home';
import Students from './Components/Students';
import Contact from './Components/Contact'
const RoutesFile=()=>{
return(
    <>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Students' element={<Students/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='*' element={<ErrorHandler/>}></Route>
    </Routes>
    </>
);
}
export default RoutesFile;