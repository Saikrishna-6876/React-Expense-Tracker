import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Dashboard from './Pages/Dashboard';
import Transactions from './Pages/Transactions';
import Navbar from './Components/Navbar';
import NotFound from './Pages/NotFound';
import Addtransaction from './Pages/Addtransaction';
function App(){
    return(
        <BrowserRouter>
        <div>
        <Navbar/>
            <Routes>
                <Route path = '/' element={<Dashboard/>}/>
                <Route path='/Transactions' element={<Transactions/>}/>
                <Route path='/Addtransaction' element={<Addtransaction/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;