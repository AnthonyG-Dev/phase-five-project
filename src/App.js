import './App.css';   
import Footer from './commponents/Footer'; 
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import SignUp from './commponents/SignUp'; 
import LogIn from './commponents/LogIn';  
import Header from './commponents/Header';
import Main from './commponents/Main';

function App() {
  return (    
   <Router>    
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
        </Routes>
        <Footer/>
      </Router>   
  );
}

export default App;
