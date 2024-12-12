import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import Add from './Components/Add'
import CreateStudentDetails from './Components/CreateStudentDetails'
import EditStudentDetails from './Components/EditStudentDetails'
import ViewStudentDetails from './Components/ViewStudentDetails'




function App() {
  

  return (
    <>
     <Header/>
    

     {/* <Home/> */}
    
     
      <Routes>
      
      <Route element={<Home/>} path='/' />
      <Route element={<Add/>} path='/Add' />
      <Route element={<CreateStudentDetails/>} path='/Create' />
      <Route element={<ViewStudentDetails/>} path='/view/:sid' />
      <Route element={<EditStudentDetails/>} path='/Edit/:sid' />
     
      
     </Routes>
     <Footer/>
     
    </>
  )
}

export default App
