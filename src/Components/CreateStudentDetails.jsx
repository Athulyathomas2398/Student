import axios from 'axios';
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';


function CreateStudentDetails() {
 const[addDetails,setAddDetails]= useState({id:'',username:'',place:'',phone:''})
 console.log(addDetails);
 const navigate=useNavigate()
 
 

 const handleUpload=(e)=>{
  e.preventDefault()
  const{id,username,place,phone}=addDetails
if(id && username && place && phone){
  try{
    axios.post("http://localhost:3000/allDatas",addDetails).then(res=>{
    
      setAddDetails(res.data)
      
      alert("Data Entered Successfully")
      navigate("/Add")
      setAddDetails({id:'',username:'',place:'',phone:''})
      
      
    })
  }
  catch(err){
    console.log(err);
    
  }
}
else{
  alert("Please fill all the fields")
}

 }
 
  return (
    <>

    <div className="conatiner-fluid d-flex justify-content-center align-items-center">
      <div className="addform border border-1 border-light shadow" style={{width:"700px",height:"520px"}}>
        <h3 className='text-center text-dark mt-5 pt-3'>Add Student Details</h3>
        <div className="container w-50 text-dark mt-5 pt-2">
        <Form>
      
        <Form.Group className="mb-4 " controlId="userid">
        
        <Form.Control onChange={(e)=>setAddDetails({...addDetails,id:e.target.value})} required type="text" placeholder="Student Id" />
      </Form.Group>

      <Form.Group className="mb-4 " controlId="username">
        
        <Form.Control onChange={(e)=>setAddDetails({...addDetails,username:e.target.value})} required type="text" placeholder="Student Name" />
      </Form.Group>
      <Form.Group className="mb-4" controlId="place">
        
        <Form.Control onChange={(e)=>setAddDetails({...addDetails,place:e.target.value})} required type="text" placeholder="Enter Place" />
      </Form.Group>

      <Form.Group className="mb-4" controlId="phone" required>
       
        <Form.Control onChange={(e)=>setAddDetails({...addDetails,phone:e.target.value})} required type="email" placeholder="Enter Phone Number" />
      </Form.Group>
    </Form>

    
        </div>
        <div className="d-flex justify-content-center align-items-between mt-5">
        <button onClick={handleUpload} className='btn btn-success me-3' >Save</button>
        <Link to={'/Add'} className='btn btn-danger'>Back</Link>
        </div>

     


      </div>

    </div>
    
    </>
  )
}

export default CreateStudentDetails