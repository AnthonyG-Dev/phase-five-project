
import { useState } from "react";

function Form() {
  let [formData, setFormData] = useState({
    comment: "",
   
  });

  function dataFetch(event) {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
}

function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("rrr", formData);
    
    fetch("http://127.0.0.1:9292/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Fix typo here
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      // Handle response here if needed
    });
  }

  return (
    <>
      <form className="container" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Comment
          </label>
          <input
            type="text"
            className="form-control"
            id="comment"
            value={formData.comment}
            onChange={dataFetch}
            required
          />
        </div>
       
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;

