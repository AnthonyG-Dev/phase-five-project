import React, { useState } from 'react';
import '../css/feed.css';

const Feed = ({ sessions, loggedInUser, course, comments, setComments, users }) => {
  const [filteredCourseId, setFilteredCourseId] = useState(loggedInUser?.course_id);
  const [searchQuery, setSearchQuery] = useState('');
  const [likes, setLikes] = useState({}); // State to manage likes for each session
  const [commentInput, setCommentInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track if the form is submitting

  const handleFilterChange = (event) => {
    setFilteredCourseId(event.target.checked ? loggedInUser?.course_id : null);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (sessionId) => {
    setIsSubmitting(true); // Set isSubmitting to true to indicate that the form is submitting

    // Send a POST request to the server with the comment data
    fetch('http://localhost:3000/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: commentInput,
        session_id: sessionId,
        user_id: loggedInUser.id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the comments state with the new comment
        setComments((prevComments) => [...prevComments, data]);

        // Clear the comment input
        setCommentInput('');
        setIsSubmitting(false); // Set isSubmitting back to false after the form submission is complete
      })
      .catch((error) => {
        console.error('Error posting comment:', error);
        setIsSubmitting(false); // Set isSubmitting back to false in case of an error
      });
  };

  const getCourseName = (courseId) => {
    const matchedCourse = course.find((c) => c.id === courseId);
    return matchedCourse ? matchedCourse.name : '';
  };

  const filteredSessions = sessions.filter(
    (session) =>
      (!filteredCourseId || session.course_id === filteredCourseId) &&
      (!searchQuery ||
        session.link.includes(searchQuery) ||
        session.start.includes(searchQuery) ||
        session.end.includes(searchQuery))
  );

  return (
    <div className='feed_div'>
      <div className='checkbox_div'>
        <input
          type='checkbox'
          checked={filteredCourseId === loggedInUser?.course_id}
          onChange={handleFilterChange}
        />
        Show sessions I can attend
      </div>
      <div className='feed_input'>
        <input
          type='text'
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder='Search sessions...'
        />
      </div>
      <section className='session_section'>
        {filteredSessions.map((session) => (
          <div className='session_div' key={session.id}>
            <p>
              Course Name: <span className='course_name'>{getCourseName(session.course_id)}</span>
            </p>
            <h6>
              starts at:.. {session.start} <br />
              ends at:.... {session.end}
            </h6>
            To view the session{' '}
            <a href={session.link} target='_blank' rel='noopener noreferrer'>
              click here
            </a>
            <br />
            <button type='button' className='btn btn-primary' data-bs-toggle='modal' data-bs-target={`#comments-modal-${session.id}`}>
              Comments
            </button>
          </div>
        ))}
      </section>

      {/* Single Modal for Comments */}
      {filteredSessions.map((session) => (
        <div key={session.id} className='modal fade' id={`comments-modal-${session.id}`} tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <form className='d-flex comment-form' onSubmit={(e) => e.preventDefault()}>
                  <input
                    className='form-control'
                    placeholder='Add comment...'
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                  />
                  <button type='button' className='btn btn-outline-secondary' onClick={() => handleSubmit(session.id)} disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send'}
                  </button>
                </form>
                <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
              </div>
              <div className='modal-body'>
                {comments
                  .filter((comment) => comment.session_id === session.id)
                  .map((comment) => {
                    const user = users.find((u) => u.id === comment.user_id);
                    return (
                      <div key={comment.id} className='comment'>
                        <h5>{user ? user.name : 'Unknown User'}</h5>
                        <h6>{comment.content}</h6>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
