import React, {useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './App.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const validationSchema = Yup.object({
    text: Yup.string().required('Required'),
    textarea: Yup.string().required('Required'),
    select: Yup.string().required('Required'),
  });

  const initialValues = { text: '', textarea: '' , select: ""};

  const onSubmit = (values) => {
    axios.post('http://localhost:3001/users', values)
      .then((response) => {
        alert("sucsess saving to server")
        console.log(response.data)})
      .catch((error) => {
        alert('Error saving to server', error)
        console.log('Error saving to server', error);
      })
      .finally(() => {
        closeModal();
      
        
      });
  };

  
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const { values, handleChange, handleSubmit, errors, touched } = formik;

 
  return (
    <div className="App">
      <h1>Exam React JS part</h1>
      <button type ="button" onClick={openModal}>
        Open Modal
      </button>

      { isModalOpen &&<div open={isModalOpen} onClose={closeModal}>
       <form onSubmit={handleSubmit}>
      
     <input  type="text"  
      name="text"
      value={values.text} 
      onChange={handleChange}
      error={!!(errors.textarea && touched.text)}
      
       /><br/>

      <textarea type="textarea"  
      name="textarea"
      value={values.textarea} 
      onChange={handleChange}
      error={!!(errors.textarea && touched.textarea)}
     >message</textarea> <br/> 
   <select id="tasks" value = "">

    <option value="texthere 1">hello</option>
    <option value="texthere 2">goodbye</option>
    <option value="texthere 3">bye</option>
  </select><br/> 

 

< button type ="Submit" >Submit</button>
<button onClick={closeModal}>Close</button>

 
</form>
      </div> }
    </div>
  );
};

export default App;

