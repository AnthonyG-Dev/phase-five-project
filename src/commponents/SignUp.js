import React, { useState , useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";

function Form() {
  // State variables to store form data
  const nav = useNavigate()

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [job, setJob] = useState('');
  const [course, setCourse] = useState([]); // This will hold the courses fetched from the server
  const [currentCourse, setCurrentCourse] = useState(''); // This will hold the selected course object
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  useEffect(() => {
    // Fetch the list of courses from the server when the component mounts
    fetch('http://localhost:3000/courses')
      .then((response) => response.json())
      .then((data) => setCourse(data))
      .catch((error) => console.error('Error:', error));
  }, []);;

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Check if passwords match
    if (password !== passwordConfirmation) {
      alert('Passwords do not match. Please try again.');
      return;
    }
  
    const userData = {
      user: {
        name: `${firstName} ${lastName}`,
        email,
        password,
        avatar: 'avatar', // Set the value you want for the avatar
        role: job, // Set the value you want for the role
        course_id: currentCourse.id, // Set the value you want for the course_id
      },
    };
  
    try {
      // Post the data to the server
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (response.ok) {
        // New user was created successfully, navigate to the /login page
        nav('/login');
      } else {
        // New user creation failed, show an alert
        alert('Failed to create a new user. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while creating a new user. Please try again.');
    }
  };
  
  
  
    return (
        <>
          {/* Navbar */}
          <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light py-3">
              <div className="container">
                {/* Navbar Brand */}
                <a href="#" className="navbar-brand">
                  <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKPw8C2wNzWMrulT2hB4qBKC7iYvaiHdhYUw&usqp=CAU"
                alt="logo"
                    width="150"
                  />
                </a>
              </div>
            </nav>
          </header>
    
          <div className="container">
            <div className="row py-5 mt-4 align-items-center">
              {/* For Demo Purpose */}
              <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-registeration/illustration.svg"
                  alt=""
                  className="img-fluid mb-3 d-none d-md-block"
                />
                <h1>Create an Account</h1>
                <p className="font-italic text-muted mb-0">
                  Welcome to Class Sync
                </p>
                {/* <p className="font-italic text-muted">
                  Snippet By{' '}
                  <a href="https://bootstrapious.com" className="text-muted">
                    <u>Bootstrapious</u>
                  </a>
                </p> */}
              </div>
    
              {/* Registration Form */}
              <div className="col-md-7 col-lg-6 ml-auto">
        <form onSubmit={handleSubmit} action="#">
          <div className="row">
            {/* First Name */}
            <div className="input-group col-lg-6 mb-4">
              <div className="input-group-prepend">
                <span className="input-group-text bg-white px-4 border-md border-right-0">
                  <i className="fa fa-user text-muted"></i>
                </span>
              </div>
              <input
                id="firstName"
                type="text"
                name="firstname"
                placeholder="First Name"
                className="form-control bg-white border-left-0 border-md"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            {/* Last Name */}
            <div className="input-group col-lg-6 mb-4">
              <div className="input-group-prepend">
                <span className="input-group-text bg-white px-4 border-md border-right-0">
                  <i className="fa fa-user text-muted"></i>
                </span>
              </div>
              <input
                id="lastName"
                type="text"
                name="lastname"
                placeholder="Last Name"
                className="form-control bg-white border-left-0 border-md"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            {/* Email Address */}
            <div className="input-group col-lg-12 mb-4">
              <div className="input-group-prepend">
                <span className="input-group-text bg-white px-4 border-md border-right-0">
                  <i className="fa fa-envelope text-muted"></i>
                </span>
              </div>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email Address"
                className="form-control bg-white border-left-0 border-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Job */}
            <div className="input-group col-lg-12 mb-4">
              <div className="input-group-prepend">
                <span className="input-group-text bg-white px-4 border-md border-right-0">
                  <i className="fa fa-black-tie text-muted"></i>
                </span>
                </div>
              <select
                id="job"
                name="jobtitle"
                className="form-control custom-select bg-white border-left-0 border-md"
                value={job}
                onChange={(e) => setJob(e.target.value)}
              >
                <option value="">Choose your role</option>
                <option value="TM">TM</option>
                <option value="Student">Student</option>
                </select><br/>
                {/* Course */}
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                         <i className="fa fa-envelope text-muted"></i>
                     </span>
                </div>
                <select
                    id="course"
                    name="course"
                    className="form-control bg-white border-left-0 border-md"
                    value={currentCourse}
                    onChange={(e) => setCurrentCourse(JSON.parse(e.target.value))}
                >
                    <option value="">Choose your course</option>
                    {course.map((c) => (
                    <option key={c.id} value={JSON.stringify(c)}>
                        {c.name}
                    </option>
                    ))}
                </select>
                </div>
            {/* Password */}
            <div className="input-group col-lg-6 mb-4">
              <div className="input-group-prepend">
                <span className="input-group-text bg-white px-4 border-md border-right-0">
                  <i className="fa fa-lock text-muted"></i>
                </span>
              </div>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                className="form-control bg-white border-left-0 border-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Password Confirmation */}
            <div className="input-group col-lg-6 mb-4">
              <div className="input-group-prepend">
                <span className="input-group-text bg-white px-4 border-md border-right-0">
                  <i className="fa fa-lock text-muted"></i>
                </span>
              </div>
              <input
                id="passwordConfirmation"
                type="password"
                name="passwordConfirmation"
                placeholder="Confirm Password"
                className="form-control bg-white border-left-0 border-md"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <div className="form-group col-lg-12 mx-auto mb-0">
              <button type="submit" className="btn btn-primary btn-block py-2">
                <span className="font-weight-bold">Create your account</span>
              </button>
            </div>

                    {/* Divider Text */}
                    <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                      <div className="border-bottom w-100 ml-5"></div>
                      <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
                      <div className="border-bottom w-100 mr-5"></div>
                    </div>
    
                    {/* Already Registered */}
                    <div className="text-center w-100">
                      <p className="text-muted font-weight-bold">
                        Already Registered? <a href="/login" className="text-primary ml-2">Login</a>
                      </p>
                    </div>
                  </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      );
}
export default Form