import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Add.css'



function Add() {

    const[getData,setGetData]=useState([])
     const navigate=useNavigate()

    useEffect(() => {
        getDetails()
      
    }, [])
    


    const getDetails=()=>{
        try{
            axios.get("http://localhost:3000/allDatas").then(res=>{
                setGetData(res.data)
                
            })
        }
        catch(err){
            console.log(err);
            
        }

    }


    const handleRemove=(id)=>{
       try{
        axios.delete(`http://localhost:3000/allDatas/${id}`).then(res=>{
            console.log(res.data);
            getDetails()
            
        })
       }
       catch(err){
        console.log(err);
        
       }
    }

    const handleView=(id)=>{
        navigate(`/view/${id}`)
    }
    const handleEdit=(id)=>{
        navigate(`/Edit/${id}`)
    }

  return (
    <>


    <div className='container text-center w-100' >
        <h1>Student Details</h1>
        <div><Link to={'/Create'} style={{textDecoration:"none"}}  className='btn border border-none btn-success'>Add New</Link></div>
       <div className="container">
       <table className='table mt-5'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Place</th>
                    <th>Phone</th>
                    <th>Actions</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
               {
                getData?.length>0 ?
                getData?.map(item=>(
                    <tr key={item?.id}>
                    <td>{item.id}</td>
                    <td>{item.username}</td>
                    <td>{item.place}</td>
                    <td>{item.phone}</td>
                    <td><button onClick={()=>handleView(item?.id)}  className='btn btn-info border border-none'><i className="fa-regular fa-eye"></i></button></td>
                    <td><button onClick={()=>handleEdit(item?.id)} className='btn btn-primary border border-none'><i className="fa-solid fa-pen-to-square"></i></button></td>
                    <td><button onClick={()=>handleRemove(item?.id)} className='btn btn-warning border border-none'><i className="fa-solid fa-trash text-danger "></i></button></td>
                </tr>
                ))
                :
                <div className='text-danger'>Nothing to Display</div>
               }
            </tbody>

        </table>
       </div>
        
       
    </div>
    </>
  )
}

export default Add