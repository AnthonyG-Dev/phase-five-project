import './App.css';   
import Footer from './commponents/Footer'; 
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import SignUp from './commponents/SignUp'; 
import LogIn from './commponents/LogIn';  
import Header from './commponents/Header';
import Main from './commponents/Main';
import Announcement from "./routes/Announcement";
import Home from "./routes/Home";
import Calendar from "./routes/Calendar";
import Feed from "./routes/Feed";
import Navbar from './commponents/Navbar';

function App() {
  return ( 
    <>
    <Navbar />
       
        <Routes>
        <Route path="/" element={
            <Main/>
          }/>
          <Route path="/signup" element={
            <SignUp/>
          }/>
          <Route path="/login" element={
          <LogIn/>
          } />
          <Route path="/" element={
          <Home/>
          } />
          <Route path="/calendar" element={
          <Calendar/>
          } />
          <Route path="/announcement" element={
          <Announcement/>
          } />
          <Route path="/feed" element={
          <Feed/>
          } />
        </Routes>
        <Footer/>
        
      </> 
  );
}

export default App;
