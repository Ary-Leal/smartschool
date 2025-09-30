//(Rotas)
import React from 'react';        
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "/pages/Home";
import StudentDetail from "/pages/"
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent'; 

const App = () => {
  return (
    <Router>
      <div>
        <h1>Smart School</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/students/add" element={<AddStudent />} />
          <Route path="/students/edit/:id" element={<EditStudent />} />
          <Route path="/students/:id" element={<StudentDetail />} />
        </Routes>
      </div>
    </Router>
  );
};