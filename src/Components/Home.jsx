import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'



function Home() {
  return (
    <>
    <div className='home d-flex justify-content-center align-items-center text-light'>
        <div className="bg-transparent text-center " style={{width:"400px",height:"100px"}}>
        <p>"TechMints: Refreshing the Way You Learn"
        </p>
        <p>"Empowering students and educators with smart tools to streamline education. At TechMints, we blend technology and innovation to help you thrive in every step of your academic journey."</p>
        <Link to={'/Add'} className='btn border border-none'>Go <i className="fa-solid fa-angle-right"></i>
        </Link>
        </div>
        
        
    </div>
   
    
    
    
    </>
  )
}

export default Home