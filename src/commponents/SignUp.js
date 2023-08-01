
function Form() {
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
                <form action="#">
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
                      >
                        <option value="">Choose your job</option>
                        <option value="">TM</option>
                        <option value="">Student</option>
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
                        type="text"
                        name="passwordConfirmation"
                        placeholder="Confirm Password"
                        className="form-control bg-white border-left-0 border-md"
                      />
                    </div>
    
                    {/* Submit Button */}
                    <div className="form-group col-lg-12 mx-auto mb-0">
                      <a href="#" className="btn btn-primary btn-block py-2">
                        <span className="font-weight-bold">Create your account</span>
                      </a>
                    </div>
    
                    {/* Divider Text */}
                    <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                      <div className="border-bottom w-100 ml-5"></div>
                      <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
                      <div className="border-bottom w-100 mr-5"></div>
                    </div>
    
                    {/* Social Login */}
                    <div className="form-group col-lg-12 mx-auto">
                      <a href="#" className="btn btn-primary btn-block py-2 btn-facebook">
                        <i className="fa fa-facebook-f mr-2"></i>
                        <span className="font-weight-bold">Continue with Facebook</span>
                      </a>
                      <a href="#" className="btn btn-primary btn-block py-2 btn-twitter">
                        <i className="fa fa-twitter mr-2"></i>
                        <span className="font-weight-bold">Continue with Twitter</span>
                      </a>
                    </div>
    
                    {/* Already Registered */}
                    <div className="text-center w-100">
                      <p className="text-muted font-weight-bold">
                        Already Registered? <a href="/login" className="text-primary ml-2">Login</a>
                      </p>
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