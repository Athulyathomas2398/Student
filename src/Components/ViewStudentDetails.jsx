import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


function ViewStudentDetails() {
    const[viewData,setViewData]=useState({})
    console.log(viewData);
    
    const {sid}=useParams()
    console.log(sid,"dj");
    

    useEffect(() => {
      viewDetails(sid)
    }, [])
    

    const viewDetails=()=>{
        try{
            if(sid){
                axios.get(`http://localhost:3000/allDatas/${sid}`).then(res=>{
                    setViewData(res.data)
                })
            }
        }
        catch(err){
            console.log(err);
            
        }
    }
    
  return (
    <>
    <div className="container d-flex justify-content-center align-items-center">
      {
        

        viewData&&
            <div className='w-50 text-center border border-2 border-light shadow rounded'>
            <h1 className='text-center text-dark mt-5'>Student Details</h1>
            <p className='text-dark mt-5' ><strong>ID:</strong>{viewData.id}</p>
            <p className='text-dark'><strong>NAME:</strong>{viewData.username}</p>
            <p className='text-dark'><strong>PLACE:</strong>{viewData.place}</p>
            <p className='text-dark'><strong>PHONE:</strong>{viewData.phone}</p>
            <Link to={'/Add'} className='btn btn-danger mt-3 mb-4'>Back</Link>
        </div>
        
      }
    </div>
    
    
    
    
    </>
  )
}

export default ViewStudentDetails