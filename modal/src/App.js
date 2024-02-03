import React,{useState} from "react"
import React, {useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Button, TextField, Modal, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import './App.css';

function App() {

  const StyledModal = styled(Modal)`
  display: flex;
 align-items: center;
  justify-content: center;   
`;
const StyledPaper = styled(Paper)`
position: absolute;
width: 400px;
padding: 20px;  
`;
 const [isModalOpen, setIsModalOpen] = useState(false);

 
const openModal = () => {
 setIsModalOpen(true);
};

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    name: Yup.string().required('Required'),
    surName: Yup.string().required('Required'),
  });


  return (
    <div className="App">
    



    </div>
  );
}

export default App;
