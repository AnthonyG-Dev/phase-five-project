import './App.css'; 
import React, { useState , useEffect } from 'react';
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

  const [course, setCourse] = useState([]); 
  const [users, setUsers] = useState([]); 
  const [comments, setComments] = useState([]); 
  const [sessions, setSessions] = useState([]); 
  const [loggedInUser, setLoggedInUser] = useState(null)

  useEffect(() => {
  // Retrieve the login state from localStorage on component mount
  const storedUser = localStorage.getItem('loggedInUser');
  if (storedUser) {
    const parsedUser = JSON.parse(storedUser);
    setLoggedInUser(parsedUser);
  }

  // Fetch the list of courses from the server when the component mounts
  fetch('http://localhost:3000/courses')
    .then((response) => response.json())
    .then((data) => setCourse(data))
    .catch((error) => console.error('Error:', error));
    
    fetch('http://localhost:3000/comments')
    .then((response) => response.json())
    .then((data) => setComments(data))
    .catch((error) => console.error('Error:', error));    

    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error:', error));

  // Fetch the list of sessions from the server when the component mounts
  fetch('http://localhost:3000/sessions')
    .then((response) => response.json())
    .then((data) => setSessions(data))
    .catch((error) => console.error('Error:', error));
}, []);



const handleLoginSuccess = (responseData) => {
  setLoggedInUser(responseData);
};

// Function to handle user logout
const handleLogout = () => {
  // Clear the login state from localStorage and from the component state
  localStorage.removeItem('loggedInUser');
  setLoggedInUser(null);
};
  return ( 
    <>
    <Navbar />
       
        <Routes>
        <Route path="/" element={
            <Main/>
          }/>
          <Route path="/signup" element={
            <SignUp course={course}/>
          }/>
          <Route path="/login" element={
            <LogIn onLoginSuccess={handleLoginSuccess} />
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
          <Feed sessions={sessions} loggedInUser={loggedInUser} course={course} comments={comments}  setComments={setComments} users={users}/>
          } />
        </Routes>
        <Footer/>
        
      </> 
  );
}

export default App;
