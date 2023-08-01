import '../css/LogIn.css'
function Form() {
  return (
      <>
      <form className="container">
          <div className="mb-3">  
          <h1> SignUp </h1>
          <label htmlFor="song" className="form-label">Full Name</label>
          <input id="song" type="text" className="form-control" required />
          </div>
          <div className="mb-3">
          <label htmlFor="artist" className="form-label">Middle Name</label>
          <input id="artist" type="text" className="form-control" required />
          </div>
          <div className="mb-3">
          <label htmlFor="single-album" className="form-label">Lat Name</label>
          <input id="single-album" type="text" className="form-control" required />
          </div>
          <div className="mb-3">
          <label htmlFor="genre" className="form-label">Email</label>
          <input id="genre" type="text" className="form-control" required />
          </div>  
          <div className="mb-3">
          <label htmlFor="single-album" className="form-label">Password</label>
          <input id="single-album" type="text" className="form-control" required />
          </div>
          <button className="button">SignUp</button>
      </form>
      </>
  )
}
export default Form