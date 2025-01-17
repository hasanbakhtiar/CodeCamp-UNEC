import React from 'react'

const About = () => {
  return (
    <div  style={{height:"70vh"}}>
      <h1 className='my-5 text-center'>About Us</h1>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 mt-5">
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-dark bg-gradient fs-2 mb-3">
        </div>
        <h3 className="fs-2 text-body-emphasis">Featured title</h3>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        <p href="#" className="icon-link text-dark">
          Call to action
        </p>
      </div>
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-dark bg-gradient fs-2 mb-3">
        </div>
        <h3 className="fs-2 text-body-emphasis">Featured title</h3>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        <p href="#" className="icon-link text-dark">
          Call to action
        </p>
      </div>
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-dark bg-gradient fs-2 mb-3">
        </div>
        <h3 className="fs-2 text-body-emphasis">Featured title</h3>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        <p href="#" className="icon-link text-dark">
          Call to action
        </p>
      </div>
    </div>
    </div>
  )
}

export default About